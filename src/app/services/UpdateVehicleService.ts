import { Inject, Service } from 'typedi';

import AppError from '../config/errors/AppError';
import { updateVehicleSchema } from '../config/utils/vehicleJoiSchemas';
import VehicleDomain from '../domain/VehicleDomain';
import { UpdateVehicleDTO } from '../interfaces/dtos/VehicleDTO';
import IVehicleRepository from '../interfaces/repositories/IVehicleRepository';
import IUpdateVehicleService from '../interfaces/services/IUpdateVehicleService';

@Service('UpdateVehicleService')
export default class UpdateVehicleService implements IUpdateVehicleService {
  constructor(@Inject('VehicleRepository') private vehicleRepository: IVehicleRepository) {}

  public async execute(id: string, vehicleData: UpdateVehicleDTO): Promise<VehicleDomain> {
    const { error } = updateVehicleSchema.validate(vehicleData);
    if (error) throw new AppError(JSON.stringify(error.message), 422);

    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) throw new AppError('Vehicle not Found', 404);

    return this.vehicleRepository.update(id, vehicleData);
  }
}
