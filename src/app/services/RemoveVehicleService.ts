import { Inject, Service } from 'typedi';

import AppError from '../config/errors/AppError';
import IVehicleRepository from '../interfaces/repositories/IVehicleRepository';
import IRemoveVehicleService from '../interfaces/services/IRemoveVehicleService';

@Service('RemoveVehicleService')
export default class RemoveVehicleService implements IRemoveVehicleService {
  constructor(@Inject('VehicleRepository') private vehicleRepository: IVehicleRepository) {}

  public async execute(id: string): Promise<boolean> {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) throw new AppError('Vehicle not Found', 404);

    return this.vehicleRepository.delete(id);
  }
}
