import React, { Component } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import VehicleDisplay from './VehicleDisplay';
import RecordContainer from './RecordContainer';
const MainDisplay = (props) => {
  return (
    <Grid
      container
      maxwidth="lg"
      className="mainContainer"
      style={{ backgroundColor: 'lightblue' }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid xs={12} item>
        <img src="https://imgur.com/6aEDR7d" />
      </Grid>
      <Grid xs={6} item style={{ backgroundColor: 'white' }}>
        <VehicleDisplay {...props} style={{ outline: '4px black solid' }} />
      </Grid>
      <Grid item xs={6}>
        <RecordContainer {...props} style />
      </Grid>
    </Grid>
  );
};
export default MainDisplay;
