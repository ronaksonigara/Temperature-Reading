const express = require("express");
const router = express.Router();

// @route post api/posts/test
// @desc Test post route
// @access public

router.post("/", (req, res) => {
  console.log(req.body[0]);
  // return res.status(200).json(req.body)
  const data = req.body;
  return res.status(200).json(data[0])
})

module.exports = router;