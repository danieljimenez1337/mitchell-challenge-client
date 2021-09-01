import React from "react";
import Vehicle from "./vehicle/Vehicle";
import { useGetVehiclesQuery } from "../../services/api";

const Vehicles = () => {
  const {data, isFetching, isLoading} = useGetVehiclesQuery({})

  if (isFetching || isLoading){
    return <div>Loading....</div>
  }

  if (data){
    return (
      <div className="container mx-auto py-4 px-2">
        <div className="flex flex-wrap gap-4 py-4">
          {data.map((vehicle) => <Vehicle vehicle={vehicle} key={vehicle.id}/>)}
        </div>
      </div>
    )
  }

  return <div>Error</div>
}

export default Vehicles