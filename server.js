const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
var cors = require("cors");
const dotenv = require("dotenv").config();

// inital routes
const user = require("./routes/user");
const disease = require("./routes/disease");
const days = require("./routes/days");

const app = express();

// Connect The Database.
connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/user", user);
app.use("/api/v1/disease", disease);
app.use("/api/v1/days", days);

const PORT = process.env.PORT || 5000 || 5001;

app.listen(PORT, () => {
  console.log(`server running - on ${PORT}`);
});
