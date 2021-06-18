import React, { useState, useEffect, Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainDisplay from './components/MainDisplay';
import SignIn from './components/SignIn';
import Register from './components/Register';
// import CreateRecord from './components/CreateRecord';
const App = (props) => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route exact path="/" component={MainDisplay} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/user" component={Register} />
          {/* <Route exact path="/create" component={CreateRecord} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
