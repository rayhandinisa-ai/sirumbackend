const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const healthRoute = require("./routes/health");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoute);

app.get("/", (req, res) => {
  res.send("Sirum Backend API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});