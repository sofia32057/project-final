import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";

// Mongoose model
export const Guest = model("Guest", {
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
    required: false,
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
});
