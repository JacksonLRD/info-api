import VehicleDomain from '../../domain/VehicleDomain';
import { UpdateVehicleDTO } from '../dtos/VehicleDTO';

export default interface IUpdateVehicleService {
  execute(id: string, vehicleData: UpdateVehicleDTO): Promise<VehicleDomain>;
}
