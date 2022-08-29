export default interface IRemoveVehicleService {
  execute(id: string): Promise<boolean>;
}
