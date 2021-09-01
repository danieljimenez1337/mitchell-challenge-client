import React from "react";
import Vehicle from "./Vehicle";
import { useGetVehiclesQuery } from "../../services/api";

const Vehicles = () => {
  const {data, isFetching, isLoading} = useGetVehiclesQuery({})

  if (isFetching || isLoading){
    return <div>Loading....</div>
  }

  if (data){
    return (
      <div className="flex max-w-5xl flex-wrap gap-4 p-4 container mx-auto">
        {data.map((vehicle) => <Vehicle vehicle={vehicle}/>)}
      </div>
    )
  }

  return <div>Error</div>
}

export default Vehicles