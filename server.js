const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const reading = require("./router/readings");

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '1000000000kb', parameterLimit: '150070808' }));

// DB config

const db = require("./config/keys").mongoURI;

// connet to mongo db

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.use("/file", reading);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server Running on " + port));
