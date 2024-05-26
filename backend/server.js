import express from "express";
import cors from "cors";
import mongoose, { model } from "mongoose";
import expressListEndpoints from "express-list-endpoints";
import bcrypt from "bcrypt";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/our-wedding";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.route("/").get(async (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json({
    message: "Hello Technigo, welcome to our wedding site API",
    endpoints: endpoints,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
