const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  phone: {
    type: Number,
    require: true,
    // unique: [true, "This Number is already Saved"],
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  disease: {
    type: mongoose.Schema.ObjectId,
    ref: "disease",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
