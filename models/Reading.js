const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ReadingSchema = new Schema({
  ts: {
    type: Number,
    required: true
  },
  val: {
    type: String,
    required: true
  }
});

module.exports = Reading = mongoose.model("readings", ReadingSchema, 'reading');
