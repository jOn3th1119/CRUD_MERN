const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const todo = require("./routes/api/todo");

const app = express();

app.use(cors())
app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/todo/", todo);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));