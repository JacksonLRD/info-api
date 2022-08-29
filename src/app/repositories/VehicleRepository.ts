import { Service } from 'typedi';

import AppError from '../config/errors/AppError';
import nodeFileSystem from '../config/utils/nodeFileSystem';
import vehicleAttributeVerification from '../config/utils/vehicleAttributeVerification';
import VehicleDomain from '../domain/VehicleDomain';
import vehicleFactory from '../factory/vehicleFactory';
import { UpdateVehicleDTO, VehicleDTO } from '../interfaces/dtos/VehicleDTO';
import IVehicleRepository from '../interfaces/repositories/IVehicleRepository';

@Service('VehicleRepository')
export default class VehicleRepository implements IVehicleRepository {
  private filePath = './src/app/config/infra/files/vehicles.json';

  public async save(vehicleData: VehicleDTO): Promise<VehicleDomain> {
    const vehicles = await this.findAll();

    const vehicle = await vehicleFactory.create(vehicleData);
    await vehicleAttributeVerification(vehicle, vehicles);

    vehicles.push(vehicle);

    const flag = await nodeFileSystem.write(this.filePath, vehicles);
    if (!flag) throw new AppError('Vehicle not created', 400);

    return vehicle;
  }

  public async findAll(): Promise<VehicleDomain[]> {
    return nodeFileSystem.read<VehicleDomain[]>(this.filePath);
  }

  public async findById(id: string): Promise<VehicleDomain | undefined> {
    const vehicles = await this.findAll();

    return vehicles.find((v) => v.id === id);
  }

  public async findByPlaca(placa: string): Promise<VehicleDomain | undefined> {
    const vehicles = await this.findAll();

    return vehicles.find((v) => v.placa === placa);
  }

  public async findByChassi(chassi: string): Promise<VehicleDomain | undefined> {
    const vehicles = await this.findAll();

    return vehicles.find((v) => v.chassi === chassi);
  }

  public async update(id: string, vehicleData: UpdateVehicleDTO): Promise<VehicleDomain> {
    const vehicles = await this.findAll();
    const vehicleIndex = vehicles.findIndex((v) => v.id === id);
    const vehicleToUpdate = vehicles.find((v) => v.id === id);

    const vehicleUpdated = { ...vehicleToUpdate, ...(await vehicleFactory.update(vehicleData)) };

    vehicles.splice(vehicleIndex, 1, vehicleUpdated);

    const flag = await nodeFileSystem.write(this.filePath, vehicles);
    if (!flag) throw new AppError('Vehicle not updated', 400);

    return vehicleUpdated;
  }

  public async delete(id: string): Promise<boolean> {
    const vehicles = await this.findAll();
    const vehicleIndex = vehicles.findIndex((v) => v.id === id);

    vehicles.splice(vehicleIndex, 1);

    const flag = await nodeFileSystem.write(this.filePath, vehicles);
    if (!flag) throw new AppError('Vehicle not updated', 400);
    return true;
  }
}
