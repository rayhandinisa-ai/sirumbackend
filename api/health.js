const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});


module.exports = serverless(app);