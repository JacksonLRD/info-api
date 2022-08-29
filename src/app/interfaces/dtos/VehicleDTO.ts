export interface VehicleDTO {
  readonly id?: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}

export interface UpdateVehicleDTO {
  placa: string;
  renavam: string;
}
