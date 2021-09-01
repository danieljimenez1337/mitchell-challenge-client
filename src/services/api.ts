import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { VehicleQuery, VehicleType } from '../types/vehicle'

const baseUrl = "http://localhost:8080/api/v1"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints: (build) => ({
    getVehicles: build.query<VehicleType[], VehicleQuery>({
      query: (args) => {
        let url = "/vehicles?"
        //turn object to params
        Object.entries(args).forEach(([key, value]) =>  url += `${key}=${value}&` )
        return url
      }
    })
  })
})

export const { useGetVehiclesQuery } = api