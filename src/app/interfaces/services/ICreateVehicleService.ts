import VehicleDomain from '../../domain/VehicleDomain';
import { VehicleDTO } from '../dtos/VehicleDTO';

export default interface ICreateVehicleService {
  execute(vehicleData: VehicleDTO): Promise<VehicleDomain>;
}
