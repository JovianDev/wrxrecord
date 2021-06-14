const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

// router.get('/', (req, res) => res.status(200).send('get to / successful'));

//route to main GUI, if user logged in,
//tested works
router.get(
  '/',
  sessionController.isLoggedIn,
  userController.getUser,
  (req, res) => {
    res.status(200).send(res.locals.user);
  }
);
//user login
//tested:works
router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(200).redirect('/');
  }
);
//create new users
//tested:works
router.post(
  '/user',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    const { user } = res.locals;
    res.status(200).json(user);
  }
);
router.get('/getwrx', vehicleController.getVehicle, (req, res) => {
  res.status(200).json(res.locals.wrx);
});
//create vehicle
//tested works
router.post('/addwrx', vehicleController.createVehicle, (req, res) => {
  res.status(200).json(res.locals.wrx);
});

// add maintenance record
//tested works
router.post('/addrecord', vehicleController.createRecord, (req, res) => {
  res.status(200).json(res.locals.record);
});

module.exports = router;
