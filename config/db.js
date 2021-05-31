const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`mongodb connect! ${conn.connection.host}`);
  } catch (error) {
    console.log("mongodb connect error");

    //exit process with failour
    // process.exit(1);
  }
};

module.exports = connectDB;
