const mongoose = require("mongoose");

const DaysSchema = new mongoose.Schema({
  prescription: {
    type: String,
    require: [true, "Title is required"],
  },
  CC: {
    type: String,
    require: [true, "Title is required"],
  },
  OE: {
    type: String,
    require: [true, "Title is required"],
  },
  pay: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  diseaseid: {
    type: String,
    required: true,
  },
});

const Disease = mongoose.model("days", DaysSchema);
module.exports = Disease;
