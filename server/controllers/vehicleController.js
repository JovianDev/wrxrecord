const { Vehicle, Record } = require('../models/recordModels');
const db = require('../models/recordModels');

const vehicleController = {};

vehicleController.createVehicle = async (req, res, next) => {
  if (
    !req.body.model_year ||
    !req.body.wrx_type ||
    !req.body.color ||
    !req.body.milage
  )
    return next(new Error({ msg: 'Enter all required fields' }));

  const { model_year, wrx_type, color, milage } = req.body;

  try {
    const newWrx = await Vehicle.create({
      owner_id: req.cookies.ssid,
      //   owner_id: '60c4302d14b29b6176164983',
      model_year,
      wrx_type,
      color,
      vin: req.body.vin,
      milage,
    });
    console.log('IN CREATEVEHICLE');

    if (!newWrx) {
      return next(new Error({ msg: 'Error creating vehicle' }));
    }
    console.log(newWrx);
    res.locals.wrx = newWrx;
    return next();
  } catch {
    (e) => console.log(e.message);
  }
};
//get vechile
//tested-works
vehicleController.getVehicle = async (req, res, next) => {
  if (!req.cookies.ssid) {
    return next(new Error({ msg: 'user needs to log in' }));
  }
  const { ssid } = req.cookies;
  console.log('SSID IN GETWRX ', ssid);
  try {
    const wrx = await Vehicle.findOne({ owner_id: ssid });
    console.log('WRX IN ßGETWRX ', wrx);

    if (!wrx) {
      console.log('I am in this if');
      return next(new Error({ msg: 'could not get wrx data' }));
    }
    res.locals.wrx = wrx;
    return next();
  } catch (e) {
    console.log(e.message);
  }
};

vehicleController.createRecord = async (req, res, next) => {
  if (!req.body.type || !req.body.milage) {
    return next(
      new Error({ msg: 'Please enter at least date and maintence type' })
    );
  }
  console.log('REQ COOKIE ', req.cookies.ssid);
  try {
    console.log('inside RECORD CREATE');
    const newRecord = await Vehicle.findOneAndUpdate(
      { owner_id: req.cookies.ssid },
      {
        $push: {
          record: {
            milage: req.body.milage,
            type: req.body.type,
            oil_type: req.body.oil_type,
            oil_viscosity: req.body.oil_viscosity,
            oilfilter_type: req.body.oilfilter_type,
            oilfilter_partnum: req.body.oilfilter_partnum,
            part_replaced: req.body.part_replaced,
            partnum: req.body.partnum,
            tire_rotation_pattern: req.body.tire_rotation_pattern,
            tire_type: req.body.tire_type,
            job_notes: req.body.job_notes,
          },
        },
      }
    );
    if (!newRecord) {
      return next(new Error({ msg: 'unknown error saving record' }));
    }
    res.locals.record = newRecord;
    return next();
  } catch {
    (e) => console.log(e.message);
  }
};
vehicleController.deleteRecord = async (req, res, next) => {
  console.log('REQ BODY ', req.body);
  if (!req.body.props) {
    return next(
      new Error({ msg: 'Please enter at least date and maintence type' })
    );
  }
  console.log('REQ COOKIE ', req.cookies.ssid);
  try {
    console.log('inside RECORD DELETE');
    const newRecord = await Vehicle.findOneAndUpdate(
      { owner_id: req.cookies.ssid },
      {
        $pull: {
          record: {
            date: req.body.props.date,
            milage: req.body.props.milage,
            type: req.body.props.type,
          },
        },
      }
    );
    if (!newRecord) {
      return next(new Error({ msg: 'unknown error saving record' }));
    }
    res.locals.record = newRecord;
    return next();
  } catch {
    (e) => console.log(e.message);
  }
};

vehicleController.getUserData = async (req, res, next) => {
  try {
    const user = await Vehicle.findOne({ userName: `Nick` });

    if (!user) {
      return next({
        log: 'vehicleController.getUserData: ERROR: Error getting user data from db',
        message: {
          err: 'Error occurred in vehicleController.getUserData. Check server logs for more details.',
        },
      });
    }
    res.locals = user;
    return next();
  } catch {
    (e) => console.log(e.stack);
  }
};

module.exports = vehicleController;
