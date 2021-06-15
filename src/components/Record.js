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

const Record = (props) => {
  return (
    <Grid>
      <Paper elevation={4}>
        <Card minwidth="lg" varient="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Date Completed 6/13/21
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
