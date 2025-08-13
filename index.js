const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Render backend!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});