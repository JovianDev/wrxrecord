import React, { useState, useEffect } from 'react';
import Record from './Record';
import {
  CardHeader,
  Card,
  Button,
  Container,
  Grid,
  Paper,
} from '@material-ui/core';
import api from '../axios';

const RecordContainer = (props) => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    api
      .get('/getwrx')
      .then((resData) => {
        console.log('RES DATA ', resData);
        const { record } = resData.data;
        console.log('RECORD ARRAY ', record);
        setRecords(record);
      })
      .catch((err) => console.log('GETWRX ERROR ', err));
  }, []);
  console.log(records);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Button item variant="contained" color="primary">
        Add Record
      </Button>
      {records &&
        records.map((record) => {
          return <Record {...record} />;
        })}

      {/* prop.record.map((el) =>
      {
        <Grid item>
          <Record {...el} />
        </Grid>
      }
      ) */}
    </Grid>
  );
};

export default RecordContainer;
