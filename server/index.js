const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
