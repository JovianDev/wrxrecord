import React from 'react';
import Record from './Record';
import {
  CardHeader,
  Card,
  Button,
  Container,
  Grid,
  Paper,
} from '@material-ui/core';

const RecordContainer = (props) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Button item variant="contained" color="primary">
        Add Record
      </Button>

      <Record />

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
