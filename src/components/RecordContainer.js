import React, { useState, useEffect } from 'react';
import Record from './Record';
import { v4 as uuid } from 'uuid';
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
  console.log('RECORD CONTAINER ', props);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    api
      .get('/getwrx')
      .then((resData) => {
        console.log('RES DATA ', resData);
        const { record } = resData.data;
        record.reverse();
        console.log('RECORD ARRAY ', record);
        setRecords(record);
      })
      .catch((err) => console.log('GETWRX ERROR ', err));
  }, []);
  console.log(records);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {records &&
        records.map((record) => {
          return <Record {...record} key={uuid()} />;
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
