const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome from root ");
  console.log(`api runnig succesfully`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running - on ${PORT}`);
});
