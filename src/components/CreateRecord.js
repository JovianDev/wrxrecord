import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DatePicker, { selectedDate } from './inputs/DatePicker';
import { v4 } from 'uuid';
import api from '../axios';
import { isValidObjectId } from 'mongoose';

const CreateRecord = ({ handleClose }) => {
  //hooks to set state of all/some form fields
  const [date, setDate] = useState('');
  const [milage, setMilage] = useState('');
  const [type, setType] = useState('');
  const [oil_type, setOil_type] = useState('');
  const [oil_viscosity, setOil_viscosity] = useState('');
  const [oilfilter_type, setOilfilter_type] = useState('');
  const [part_replaced, setPart_replaced] = useState('');
  const [partnum, setPartnum] = useState('');
  const [job_notes, setJob_notes] = useState('');
  const [job_id, setJob_id] = useState('');
  const ref = v4();

  console.log(job_id);
  //handle submit function to pass data to express
  const handleSubmit = (e) => {
    e.preventDefault();
    setJob_id(ref);

    api({
      method: 'post',
      url: '/addrecord',
      data: {
        date: '6/16/2021',
        milage: milage,
        type: type,
        oil_type: oil_type,
        oil_viscosity: oil_viscosity,
        oilfilter_type: oilfilter_type,
        part_replaced: part_replaced,
        partnum: partnum,
        job_notes: job_notes,
      },
    })
      .then((res) => {
        console.log(job_id);
        console.log('POST RESPONSE ', res.data);
      })
      .catch((err) => console.log('ADD RECORD ERROR', err));

    handleClose();
  };

  //all state item stored in obj to pass to express post route
  // const record = {
  //   date: '6/16/2021',
  //   milage: milage,
  //   type: type,
  //   oil_type: oil_type,
  //   oil_viscosity: oil_viscosity,
  //   oilfilter_type: oilfilter_type,
  //   part_replaced: part_replaced,
  //   partnum: partnum,
  //   job_notes: job_notes,
  // };
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: 20,
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft: 20,
        marginRight: 20,
        width: '600px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <DatePicker onChange={(e) => setDate(e.target.value)} />

        <TextField
          label="Milage"
          variant="outlined"
          required
          value={milage}
          onChange={(e) => setMilage(e.target.value)}
        />
        <TextField
          label="Event Type (i.e. Oil change, Spark Plugs Replaced, etc ...)"
          variant="outlined"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          label="Oil Type"
          variant="outlined"
          value={oil_type}
          onChange={(e) => setOil_type(e.target.value)}
        />
        <TextField
          label="Oil Viscosity"
          variant="outlined"
          value={oil_viscosity}
          onChange={(e) => setOil_viscosity(e.target.value)}
        />
        <TextField
          label="Oil Filter Type"
          variant="outlined"
          value={oilfilter_type}
          onChange={(e) => setOilfilter_type(e.target.value)}
        />
        <TextField
          label="Part Replaced"
          variant="outlined"
          value={part_replaced}
          onChange={(e) => setPart_replaced(e.target.value)}
        />
        <TextField
          label="Part Number"
          variant="outlined"
          value={partnum}
          onChange={(e) => setPartnum(e.target.value)}
        />
        <TextField
          label="Job Notes"
          variant="outlined"
          value={job_notes}
          multiline
          rows={6}
          onChange={(e) => setJob_notes(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Record
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecord;
// import { link, withRouter } from 'react-router-dom';

// export default withRouter(CreateRecord);
