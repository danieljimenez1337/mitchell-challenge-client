import React from 'react';
import Vehicles from './components/vehicles/Vehicles';
import Header from './components/header/Header';
import {Switch, Route} from "react-router-dom";
import ParamVehicles from './components/vehicles/ParamVehicle';

const App = () => {
  return(
    <div className="stack h-full">
      <Header/>
      <div className="bg-gray-100 h-full">
        <Switch>
          <Route path="/vehicle/:id">
            <ParamVehicles/>
          </Route>
          <Route path="/">
            <Vehicles/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App;
