const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;
const apiRouter = require('./routes/api');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('********************************');
  console.log('REQ METHOD ', req.method);
  console.log('REQ URL ', req.url);
  console.log('********************************');
  return next();
});

app.use('/', express.static(path.resolve(__dirname, '../dist')));
//router handler
app.use('/api', apiRouter);
//catch to handle undefined routes
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);
//global error handler
app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() });
});

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
