import VehicleDomain from '../../domain/VehicleDomain';
import { VehicleDTO, UpdateVehicleDTO } from '../dtos/VehicleDTO';

export default interface IVehicleRepository {
  save(vehicle: VehicleDTO): Promise<VehicleDomain>;
  findAll(): Promise<VehicleDomain[]>;
  findById(id: string): Promise<VehicleDomain | undefined>;
  findByPlaca(placa: string): Promise<VehicleDomain | undefined>;
  findByChassi(chassi: string): Promise<VehicleDomain | undefined>;
  update(id: string, vehicle: UpdateVehicleDTO): Promise<VehicleDomain>;
  delete(id: string): Promise<boolean>;
}
