const express = require("express");
const connectDB = require("./config/db");
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const user = require('./routes/user')



const app = express();

// Connect The Database.
connectDB();

app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/user', user)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running - on ${PORT}`);
});
