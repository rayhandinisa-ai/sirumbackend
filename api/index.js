const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const healthRoute = require("./health");

const express = require("serverless-http");

const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

export default serverless(app);