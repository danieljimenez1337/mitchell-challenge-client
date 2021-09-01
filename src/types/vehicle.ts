export interface VehicleType {
  year: number;
  make: string;
  model: string;
  id: number;
}

export type NewVehicle = Omit<VehicleType, 'id'>

export type VehicleQuery = Partial<VehicleType>