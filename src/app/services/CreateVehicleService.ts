import { Inject, Service } from 'typedi';

import AppError from '../config/errors/AppError';
import { createVehicleSchema } from '../config/utils/vehicleJoiSchemas';
import VehicleDomain from '../domain/VehicleDomain';
import { VehicleDTO } from '../interfaces/dtos/VehicleDTO';
import IVehicleRepository from '../interfaces/repositories/IVehicleRepository';
import ICreateVehicleService from '../interfaces/services/ICreateVehicleService';

@Service('CreateVehicleService')
export default class CreateVehicleService implements ICreateVehicleService {
  constructor(@Inject('VehicleRepository') private vehicleRepository: IVehicleRepository) {}

  public async execute(vehicleData: VehicleDTO): Promise<VehicleDomain> {
    const { error } = createVehicleSchema.validate(vehicleData);
    if (error) throw new AppError(JSON.stringify(error.message), 422);

    return this.vehicleRepository.save(vehicleData);
  }
}
