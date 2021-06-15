import React, { useState, useEffect } from 'react';
import { Button, CardContent, Container, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import api from '../axios';

const VehicleDisplay = () => {
  const [wrx, setWrx] = useState({});
  useEffect(() => {
    api
      .get('/getwrx')

      .then((resData) => {
        console.log(resData);
        const { data } = resData;
        setWrx(data);
      })
      .catch((err) => console.log('GETWRX ERROR ', err));
  }, []);
  const useStyles = makeStyles({
    root: {
      minWidth: 350,
    },
    title: {
      fontSize: 35,
      fontWeight: 700,
    },
    secondary: {
      fontSize: 18,
      fontWeight: 500,
      margin: 5,
    },
    tertiary: {
      fontSize: 24,
      fontWeight: 600,
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="vechileDisplayBox">
            <Typography
              className={classes.title}
              variant="h5"
              component="h2"
              color="primary"
            >
              {wrx.model_year} WRX {wrx.wrx_type}
            </Typography>

            <Typography className={classes.secondary} color="textSecondary">
              VIN: {wrx.vin}
            </Typography>
            <Typography className={classes.secondary} color="textSecondary">
              {wrx.color}
            </Typography>

            <Typography className={classes.tertiary}>
              Milage: {wrx.milage}
            </Typography>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VehicleDisplay;
