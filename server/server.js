const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.use(express.json());

const db = config.get("mongoURI");


mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));