import React from 'react';
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

const Record = (props) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 385,
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
  return (
    <Grid>
      <Paper elevation={4}>
        <Card className={classes.root} varient="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary">
              Date 6/13/21
            </Typography>
            <Typography variant="h5" component="h2" color="Primary">
              {props.type}
            </Typography>
            <Typography variant="h5" component="h2" color="Primary">
              Rotation Pattern:{props.tire_rotation_pattern}
            </Typography>
            record stuff
          </CardContent>
          <CardContent>
            <ButtonGroup>
              <Button variant="contained" color="primary">
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
};

export default Record;
