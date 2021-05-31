const mongoose = require('mongoose');

const DaysSchema = new mongoose.Schema({
    prescription: {
      type: String,
      require: [true, "Title is required"],
    },
    bill : {
        type : Number,
    },
    due : {
      type : Number
    },
    pay :  {
      type : Number
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });



const Disease = mongoose.model("days", DaysSchema);
module.exports = Disease;
  