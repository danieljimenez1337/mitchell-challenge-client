import React, { useState } from "react";
import Button from "../../common/button/Button";
import Modal from "../../forms/Modal";
import AddVehicle from "./addVehicle";

const AddVehicleButton = () => {
  const [show, setShow] = useState(false)
  return(
    <div>
      <Button label="Add" primary={true} onClick={() => setShow(true)}/>
      {
        show && 
        <Modal disable= {()=>setShow(false)}>
          <AddVehicle disable= {()=>setShow(false)}/>
        </Modal> 
      }
    </div>
  )
}


export default AddVehicleButton