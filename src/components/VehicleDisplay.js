import React, { useState, useEffect } from 'react';
import { Button, CardContent, Container, Grid, Card } from '@material-ui/core';
import api from '../axios';

const VehicleDisplay = (props) => {
  const [wrx, setWrx] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const request = await api.get('/getwrx');
      console.log(request);
      setWrx(request);
      return request;
    };
    fetchData();
    // fetch('http://localhost:3000/api/getwrx')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setWrx(data);
    //   });
  }, []);
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="vechileDisplayBox">
            <p>{wrx.wrx_type}</p>
            <p>VIN: 09395ktke09ed0fk</p>
            <p>Milage: 24100</p>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VehicleDisplay;
