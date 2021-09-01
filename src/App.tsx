import React from 'react';
import Vehicles from './components/vehicles/Vehicles';
import Header from './components/header/Header';

const App = () => {
  return(
    <div className="stack h-full">
      <Header/>
      <div className="bg-gray-100 h-full">
        <Vehicles/>
      </div>
    </div>
  )
}

export default App;
