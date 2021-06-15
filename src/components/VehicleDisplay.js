import React, { useState, useEffect } from 'react';
import { Button, CardContent, Container, Grid, Card } from '@material-ui/core';
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
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="vechileDisplayBox">
            <p>
              {wrx.model_year} WRX {wrx.wrx_type}
            </p>
            <p>{wrx.color}</p>
            <p>VIN: 09395ktke09ed0fk</p>
            <p>Milage: {wrx.milage}</p>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VehicleDisplay;
