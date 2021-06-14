const { Vehicle, Record, User } = require('../models/recordModels');
const db = require('../models/recordModels');

const userController = {};

//createUser creates new user when they register
userController.createUser = async (req, res, next) => {
  //   const { username, password, model_year, wrx_type, color, vin, milage } =
  //     req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  //   check existing user
  const existingUser = await User.findOne({ username });
  console.log('EXISTING USER =>> ', existingUser);
  if (existingUser) return res.status(400).json({ msg: 'User already exists' });

  try {
    const newUser = await User.create({
      username: username,
      password: password,
    });
    res.locals.user = newUser;
    console.log(res.locals.user);
    // res.locals.vehicle = { model_year, wrx_type, color, vin, milage };
    // console.log(res.locals.vehicle);
    return next();
  } catch (err) {
    console.log(err);
  }
};

userController.verifyUser = async (req, res, next) => {
  console.log('REQBODY VERIFY=>>', req.body.username);
  try {
    //check to make sure both field are filled out, if not throw
    if (!req.body.username || !req.body.password) {
      res.redirect('/login');
      return next(new Error('Please enter valid username and password'));
    }
    //find user document by searching for unique username
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      res.redirect('/login');
      return next(new Error('user does not exist'));
    }

    if (user.password !== req.body.password) {
      res.redirect('/login');
      return next(new Error('Password does not match'));
    } else {
      console.log(user.id);
      res.locals.user = user;
      return next();
    }

    //save unique user document _id to res.locals to pass to next middleware
    // use toString method to decode db generated ID object from BSON? to hex
  } catch (e) {
    //redirect user to signup page when error
    return res.redirect('/login');
  }
};

userController.getUser = async (req, res, next) => {
  try {
    const user = User.findOne({ _id: res.locals.ssid });
    if (!user) return next(new Error('unknown error getting user information'));
    res.locals.user = user;
  } catch (err) {
    console.log(err);
  }
};
module.exports = userController;
