import express from "express";
import cors from "cors";
import mongoose, { model } from "mongoose";
import expressListEndpoints from "express-list-endpoints";
import bcrypt from "bcrypt";
// import guestData from "./data/guests.json";
import { Guest } from "./models/GuestModel";
import { authenticateUser } from "./middlewares/auth";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/our-wedding";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;
mongoose.set("setDefaultsOnInsert", false);

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// ROUTES
app.route("/").get(async (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json({
    message: "Hello Technigo, welcome to our wedding site API",
    endpoints: endpoints,
  });
});

//Login
app.route("/login").patch(async (req, res) => {
  // Find guest by email
  const guest = await Guest.findOne({ email: req.body.email }).exec();

  // Check if invitation code is correct
  if (guest && req.body.password === process.env.INVITE_CODE) {
    // a. guest email and code match
    // create and save access token
    guest.accessToken = bcrypt.genSaltSync();
    guest.save();
    //send result to client
    res.status(201).json({
      message: "User logged in successfully",
      accessToken: guest.accessToken,
      guestId: guest._id,
    });
  } else if (guest) {
    // b. guest exists but code did not match
    res.status(401).send("Password did not match");
  } else {
    // c. guest does not exists
    res.status(400).json({ message: "guest name invalid" });
  }
});

// Auth, verify guest's access token
app
  .route("/auth")
  .all(authenticateUser)
  .get(res => res.status(200).send("Auth OK"));

// Guests
app
  .route("/guests")
  .all(authenticateUser)
  // Get all guests (specific fields)
  .get(async (req, res) => {
    const guests = await Guest.find(
      {},
      "firstname lastname relation willAttend plusOne speech"
    );
    res.send(guests);
  })
  // Post new guest
  .post(async (req, res) => {
    try {
      // Deconstruct request body
      const {
        firstname,
        lastname,
        email,
        password,
        plusOne,
        speech,
        foodChoice,
        relation,
        willAttend,
      } = req.body;

      // Create and save new guest
      const newGuest = await new Guest({
        firstname,
        lastname,
        email,
        password: bcrypt.hashSync(password, 10),
        plusOne,
        speech,
        foodChoice,
        relation,
        willAttend,
      }).save();

      res.status(201).send(`Created guest ID ${newGuest._id}`);
    } catch (err) {
      res.status(400).json({ message: "Post request failed", error: err });
    }
  });

app
  .route("/guests/:guestId")
  .all(authenticateUser)
  // Find and return specific guest
  .get(async (req, res) => {
    try {
      const guest = await Guest.findById(
        req.params.guestId,
        "_id firstname lastname relation willAttend plusOne speech"
      ).exec();
      res.status(201).json(guest);
    } catch (err) {
      res.status(400).json({ message: "User not found", error: err });
    }
  })
  // Find and update  guest
  .patch(async (req, res) => {
    try {
      const guest = await Guest.findById(req.params.guestId).exec();

      // Update properties
      guest.willAttend = req.body.willAttend;
      guest.foodChoice = req.body.foodChoice;
      if (guest.plusOne.isAllowed) {
        guest.plusOne.name = req.body.plusOne.name;
        guest.plusOne.foodChoice = req.body.plusOne.foodChoice;
      }
      if (guest.speech.isAllowed) {
        guest.speech.willMakeSpeech = req.body.willMakeSpeech;
      }

      guest.save();

      res
        .status(201)
        // .json(guest);
        .json({ message: `Updated guest ID ${guest._id} successfully` });
    } catch (err) {
      res.status(400).json({ message: "User not found", error: err });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
