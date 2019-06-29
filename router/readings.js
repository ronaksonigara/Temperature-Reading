const express = require("express");
const router = express.Router();

//Load Reading model
const Reading = require("../models/Reading");

router.post("/", (req, res) => {
  let graphX = [], graphY = [];
  let data = req.body;
  let start = data[0].ts;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  Reading.collection.insertMany(data, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log('inserted');
    }
  });
  let tempArray = [];
  let j = 0, i = 0;
  while (j < 12) {
    graphX[j] = new Date(start).toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' });
    let nextmonth = start + 2.628e+9;
    start = nextmonth;
    let indexOfMonth = data.findIndex(d => d.ts == nextmonth);
    tempArray = (data.slice(i, indexOfMonth)).map(value => value.val);
    i = indexOfMonth;
    graphY[j] = (tempArray.reduce(reducer) / tempArray.length);
    j++;
  }
  return res.status(200).json([graphX, graphY]);
})

module.exports = router;