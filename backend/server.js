import express from "express";
import cors from "cors";
import mongoose, { model } from "mongoose";
import expressListEndpoints from "express-list-endpoints";
import bcrypt from "bcrypt";
import guestData from "./guests.json";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/our-wedding";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;
mongoose.set("setDefaultsOnInsert", false);

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

const Guest = model("Guest", {
  accessToken: {
    type: String,
    default: () => bcrypt.genSaltSync(),
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  willAttend: {
    type: Boolean,
    default: false,
  },
  plusOne: {
    isAllowed: { type: Boolean, default: false },
    name: { type: String },
    foodChoice: { type: String },
  },
  speech: {
    isAllowed: {
      type: Boolean,
    },
    willMakeSpeech: {
      type: Boolean,
      default: false,
    },
  },
  foodChoice: {
    type: String,
  },
  relation: {
    type: String,
    required: true,
  },
  // Combine name a unique username
  // name: {
  //   type: String,
  //   default: () => {
  //     `${this.firstname} ${this.lastname}`;
  //   },
  //   unique: true,
  // },
});

// Seed database with guestlist - temporary solution
if (process.env.RESET_DB) {
  console.log("Resetting the database!");
  const seedDatabase = async () => {
    await Guest.deleteMany({});

    guestData.forEach(async guest => {
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
      } = guest;

      new Guest({
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
    });
  };
  seedDatabase();
}

// ROUTES
app.route("/").get(async (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json({
    message: "Hello Technigo, welcome to our wedding site API",
    endpoints: endpoints,
  });
});

app
  .route("/guests")
  // Get all guests (specific fields)
  .get(async (req, res) => {
    const guests = await Guest.find(
      {},
      "firstname lastname relation willAttend plusOne.name"
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
  // Find specific guest
  .get(async (req, res) => {
    try {
      const guest = await Guest.findById(
        req.params.guestId,
        "_id token firstname lastname relation willAttend plusOne.name"
      ).exec();
      res.status(201).json(guest);
    } catch (err) {
      res.status(400).json({ message: "Used not found", error: err });
    }
  });

//Login
app.route("/login").post(async (req, res) => {
  // Find user by name
  const guest = await Guest.findOne({ email: req.body.email }).exec();
  console.log(guest);

  // Check if password is correct
  if (guest && bcrypt.compareSync(req.body.password, guest.password)) {
    // a. User name and password match
    res.status(201).json({
      message: "User logged in successfully",
      accessToken: guest.accessToken,
    });
  } else if (guest) {
    // b. user exists but password did not match
    res.status(401).json({ message: "Password did not match" });
  } else {
    // c. user does not exists
    res.status(400).json({ message: "guest name invalid" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
