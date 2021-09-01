import React from "react";
import {useParams} from "react-router-dom"
import { useGetVehiclesByIdQuery } from "../../services/api";
import Vehicle from "./vehicle/Vehicle";

interface TypeParams {
  id: string
}

const ParamVehicles = () => {
  const id = useParams<TypeParams>().id

  const {data, isFetching,isLoading} = useGetVehiclesByIdQuery(parseInt(id, 10))

  if (isFetching || isLoading){
    return <div>Loading....</div>
  }

  if(data){
    return(
      <div className="grid place-items-center mt-8">
        <Vehicle vehicle={data}/>
      </div>
    )
  }

  return <div>Error</div>
  
}

export default ParamVehicles;