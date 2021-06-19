import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from '../axios';

const Record = (props) => {
  console.log('PROPS AT TOP ', props, 'KEY', props.key);

  const [date, setDate] = useState('');
  const [milage, setMilage] = useState(props.milage);
  const [type, setType] = useState(props.type);

  const handleDelete = () => {
    const arrReq = {
      date: '6/18/2021',
      milage: milage,
      type: type,
    };
    console.log('DELETE PROPS', milage, type);
    api
      .put('/deleterecord', arrReq)
      .then((res) => {
        console.log('DELETE RESPONSE ', res.data);
      })
      .catch((err) => console.log('DELETE RECORD ERROR', err));
  };
  const useStyles = makeStyles({
    root: {
      minWidth: 700,
      maxWidth: 700,
      margin: 20,
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
      fontWeight: 500,
    },
  });
  const classes = useStyles();
  //if oil change
  if (props.oil_type) {
    return (
      <Grid m={10}>
        <Paper elevation={8}>
          <Card className={classes.root} varient="outlined" m={10}>
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h4" component="h2" color="darkgray">
                    {props.type}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" component="h2" color="textSecondary">
                    Date 6/13/21
                  </Typography>
                </Grid>
              </Grid>
              <div>
                <hr></hr>
              </div>

              <Typography
                variant="h5"
                component="h2"
                color="primary"
                fontWeight="600"
              >
                Milage: {props.milage}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Oil Type: {props.oil_type}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Oil Viscosity: {props.oil_viscosity}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Oil Filter: {props.oilfilter_type}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Part Number: {props.partnum}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Job Notes: {props.job_notes}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Job reference: {props.job_id}
              </Typography>
            </CardContent>
            <CardContent>
              <ButtonGroup>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    console.log('KEY', props);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    );
  } else {
    return (
      <Grid>
        <Paper elevation={8}>
          <Card className={classes.root} varient="outlined">
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h4" component="h2" color="Primary">
                    {props.type}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" component="h2" color="textSecondary">
                    Date 6/13/21
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" component="h2" color="testSecondary">
                Milage: {props.milage}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Part replaced: {props.part_replaced}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Part Number: {props.partnum}
              </Typography>
              <Typography variant="h5" component="h2" color="Primary">
                Job Notes: {props.job_notes}
              </Typography>
            </CardContent>
            <CardContent>
              <ButtonGroup>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    console.log('KEY', props);
                  }}
                >
                  Update
                </Button>
                <Button variant="outlined" color="secondary">
                  Delete
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    );
  }
};

export default Record;
