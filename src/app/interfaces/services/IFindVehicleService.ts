import VehicleDomain from '../../domain/VehicleDomain';

export default interface IFindVehicleService {
  findById(id: string): Promise<VehicleDomain>;
  findAll(): Promise<VehicleDomain[]>;
}
