import React from "react";
import AddVehicleButton from "../vehicles/createVehicle/AddVehicleButton";



const Header = () => {
  return (
    <header className="h-20 px-6 bg-black flex items-center">
      <h1 className="font-bold text-2xl text-white mr-auto">
        Vehicle Inventory
      </h1>
      <AddVehicleButton/>
    </header>
  )
}

export default Header;