// api/health.js
import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

export default serverless(app);