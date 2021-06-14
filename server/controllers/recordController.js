const { Record } = require('../models/recordModels');

const recordController = {};

recordController.addRecord = async (req, res, next) => {
  if (!req.body.date || !req.body.type) {
    return next(
      new Error({ msg: 'Please enter at least date and maintence type' })
    );
  }
  // try{
  //     const record = await Record.create(

  //     )
  // }
};

module.exports = recordController;
