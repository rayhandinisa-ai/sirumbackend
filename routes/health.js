const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend API is healthy ✅",
    timestamp: new Date()
  });
});

module.exports = router;