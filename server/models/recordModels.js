const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://Nick:1011Boba@cluster0.crybn.mongodb.net/wrxrecord?retryWrites=true&w=majority';
//   'mongodb+srv://Nick:1011Boba@cluster0.crybn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  .then(() => console.log('Connected to Mongo'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  Vehicle_Id: [{}],
});

const vehicleSchema = new Schema({
  owner_id: {
    type: String,
    required: true,
  },
  model_year: {
    type: String,
    required: true,
  },
  wrx_type: {
    type: String,
    required: true,
  },
  color: String,
  vin: Number,
  milage: {
    type: String,
    required: true,
  },
  record: {
    type: Array,
    default: [
      {
        date: Date,
        milage: Number,
        type: String,
        oil_type: String,
        oil_viscosity: String,
        oilfilter_type: String,
        oilfilter_partnum: String,
        part_replaced: String,
        partnum: String,
        tire_rotation_pattern: String,
        tire_type: String,
        job_notes: String,
      },
    ],
  },
});

const recordSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  milage: Number,
  event_type: String,
});

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('user', userSchema);

const Record = mongoose.model('record', recordSchema);

const Vehicle = mongoose.model('vehicle', vehicleSchema);

const Session = mongoose.model('session', sessionSchema);

module.exports = {
  User,
  Record,
  Vehicle,
  Session,
};
