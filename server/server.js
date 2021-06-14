const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;
const apiRouter = require('./routes/api');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../src')));
//router handler
app.use('/api', apiRouter);
//catch to handle undefined routes
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
