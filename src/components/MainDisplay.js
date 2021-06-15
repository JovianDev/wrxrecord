import React, { Component } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import VehicleDisplay from './VehicleDisplay';
import RecordContainer from './RecordContainer';
import MenuNav from './MenuNav';
const MainDisplay = (props) => {
  return (
    <Grid
      container
      maxwidth="lg"
      className="mainContainer"
      style={{ backgroundColor: 'white' }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <MenuNav />
      </Grid>
      <Grid item xs={6}>
        <img src="https://i.imgur.com/eZMchpK.png" />
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
