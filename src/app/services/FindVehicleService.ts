import { Inject, Service } from 'typedi';

import AppError from '../config/errors/AppError';
import VehicleDomain from '../domain/VehicleDomain';
import IVehicleRepository from '../interfaces/repositories/IVehicleRepository';
import IFindVehicleService from '../interfaces/services/IFindVehicleService';

@Service('FindVehicleService')
export default class FindVehicleService implements IFindVehicleService {
  constructor(@Inject('VehicleRepository') private vehicleRepository: IVehicleRepository) {}

  public async findById(id: string): Promise<VehicleDomain> {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) throw new AppError('Vehicle not Found', 404);

    return vehicle;
  }
  public async findAll(): Promise<VehicleDomain[]> {
    const vehicles = await this.vehicleRepository.findAll();
    if (!vehicles) throw new AppError('Vehicles not found', 400);

    return vehicles;
  }
}
