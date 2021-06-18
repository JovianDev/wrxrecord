import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core';
import CreateRecord from './CreateRecord';

const ModalDialog = ({ open, handleClose }) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: 800,
      height: '100vh',
    },
  }));
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose} disableBackdropClick>
      <CreateRecord handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
