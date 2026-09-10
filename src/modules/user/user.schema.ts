import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  phone: String,
  password: String,
});

export const userModel = mongoose.model("User", userSchema, "users");
