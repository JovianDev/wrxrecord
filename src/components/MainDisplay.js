import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VehicleDisplay from './VehicleDisplay';
import RecordContainer from './RecordContainer';
import MenuNav from './MenuNav';
import ModalDialog from './ModelDialog';

const MainDisplay = () => {
  //add record modal state
  const [addRecOpen, setAddRecOpen] = useState(false);
  console.log(addRecOpen); //?
  //open/close handlers for add record modal
  const handleOpen = () => {
    setAddRecOpen(true);
    console.log('ADD RECORD MODAL OPEN');
  };
  const handleClose = () => {
    setAddRecOpen(false);
  };
  //material-ui styles
  const useStyles = makeStyles({
    root: {
      minWidth: 385,
    },
    title: {
      fontSize: 35,
      fontWeight: 700,
    },
    button: {
      margin: 15,
      minWidth: 300,
      padding: 10,
      fontSize: 20,
    },
    tertiary: {
      fontSize: 24,
      fontWeight: 500,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <MenuNav />
      <Grid
        container
        maxwidth="lg"
        className="mainContainer"
        style={{ backgroundColor: 'white' }}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <img src="https://i.imgur.com/eZMchpK.png" />
        </Grid>
        <Grid xs={6} item bgcolor="#282828">
          <VehicleDisplay style={{ outline: '4px black solid' }} />
        </Grid>
        <div>
          {/* <button onClick={handleOpen}>Add record</button> */}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<BuildIcon />}
            // onClick={handleOpen}
            onClick={handleOpen}
          >
            Add Record
          </Button>
        </div>
        <ModalDialog open={addRecOpen} handleClose={handleClose} />
        <Grid item xs={6}>
          <RecordContainer />
        </Grid>
      </Grid>
    </div>
  );
};
export default MainDisplay;
