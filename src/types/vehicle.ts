export interface VehicleType {
  year: number;
  make: string;
  model: string;
  id: number;
}

export interface VehicleQuery {
  year?: number;
  make?: string;
  model?: string;
}