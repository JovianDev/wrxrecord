const { Session } = require('../models/recordModels');
const sessionController = {};

sessionController.startSession = (req, res, next) => {
  if (!res.locals.user.id) return next({ error: 'error starting session' });
  Session.create({
    cookieId: res.locals.user.id,
  });
  return next();
};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const data = await Session.findOne({
      cookieId: req.cookies.ssid,
    });

    if (data.length < 1) {
      res.redirect('/login');
      return next({ error: 'Log back in' });
      //console.log('session expired');
    } else {
      res.locals.ssid = req.cookies.ssid;
      return next();
    }
  } catch (err) {
    //console.error(err.stack);
    return next({ err: 'session expired' });
  }
};

module.exports = sessionController;
