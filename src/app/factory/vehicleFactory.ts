import { v4 as uuidv4 } from 'uuid';

import VehicleDomain from '../domain/VehicleDomain';
import { UpdateVehicleDTO, VehicleDTO } from '../interfaces/dtos/VehicleDTO';

const vehicleFactory = () => {
  const self = {
    create: async (vehicle: VehicleDTO): Promise<VehicleDomain> => {
      try {
        const newVehicle = new VehicleDomain();

        newVehicle.id = vehicle.id || uuidv4();
        newVehicle.placa = vehicle.placa || '';
        newVehicle.chassi = vehicle.chassi;
        newVehicle.renavam = vehicle.renavam || '';
        newVehicle.modelo = vehicle.modelo;
        newVehicle.marca = vehicle.marca;
        newVehicle.ano = vehicle.ano;

        return newVehicle;
      } catch (error) {
        if (error instanceof Error) throw error.message;
        throw error;
      }
    },
    update: async (vehicle: UpdateVehicleDTO): Promise<VehicleDomain> => {
      try {
        const newVehicle = new VehicleDomain();

        newVehicle.placa = vehicle.placa || '';
        newVehicle.renavam = vehicle.renavam || '';

        return newVehicle;
      } catch (error) {
        if (error instanceof Error) throw error.message;
        throw error;
      }
    },
  };
  return self;
};
export default vehicleFactory();
