const express = require("express");
const bodyParser = require("body-parser");

const reading = require("./router/temperature");

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '1000000000kb', parameterLimit: '150070808' }));

app.use("/file", reading);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server Running on " + port));
