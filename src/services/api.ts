import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { NewVehicle, VehicleQuery, VehicleType } from '../types/vehicle'

const baseUrl = "http://localhost:8080/api/v1"

export const api = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  //tags are used to invalidate queries
  tagTypes: ['Vehicles'],
  endpoints: (build) => ({
    getVehicles: build.query<VehicleType[], VehicleQuery>({
      query: (args) => {
        let url = "/vehicles?"
        //turn object to params
        Object.entries(args).forEach(([key, value]) =>  url += `${key}=${value}&` )
        return url
      },
      providesTags: (result) =>
        result
          ? 
            [
              ...result.map(({ id }) => ({ type: 'Vehicles', id } as const)),
              { type: 'Vehicles', id: 'LIST' },
            ]
          : 
            [{ type: 'Vehicles', id: 'LIST' }],
    }),
    getVehiclesById: build.query<VehicleType, number>({
      query: (id) => `/vehicles/${id}`,
      providesTags: (result, error, id) => [{ type: 'Vehicles', id }],
    }),
    addVehicle: build.mutation<VehicleType, NewVehicle>({
      query(body) {
        return {
          url: `/vehicles`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Vehicles', id: 'LIST' }],
    }),
    updateVehicle: build.mutation<VehicleType, VehicleType>({
      query(body) {
        return {
          url: `/vehicles`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Vehicles', id }],
    }),
    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `vehicles/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Vehicles', id }],
    }),
  })
})

export const { 
  useGetVehiclesQuery,
  useAddVehicleMutation,
  useDeletePostMutation,
  useUpdateVehicleMutation,
  useGetVehiclesByIdQuery 
} = api