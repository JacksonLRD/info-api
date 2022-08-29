import VehicleDomain from '../../domain/VehicleDomain';
import AppError from '../errors/AppError';

const vehicleAttributeVerification = async (
  vehicleToVerify: VehicleDomain,
  vehicles: VehicleDomain[]
): Promise<void> => {
  const placaExists = vehicles.some((v) => v.placa === vehicleToVerify.placa && v.placa !== '');
  if (placaExists) throw new AppError('A vehicle with this placa alredy exists', 422);
  const chassiExists = vehicles.some((v) => v.chassi === vehicleToVerify.chassi);
  if (chassiExists) throw new AppError('A vehicle with this chassi alredy exists', 422);
  const renavamExists = vehicles.some(
    (v) => v.renavam === vehicleToVerify.renavam && v.renavam !== ''
  );
  if (renavamExists) throw new AppError('A vehicle with this renavam alredy exists', 422);
};

export default vehicleAttributeVerification;
