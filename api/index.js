const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const healthRoute = require("./health");

const serverless  = require("serverless-http");

const app = express();

// API route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// Jika dijalankan lokal (npm start), maka gunakan app.listen
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
  });
}

// Untuk Vercel (serverless function)
module.exports = serverless(app);