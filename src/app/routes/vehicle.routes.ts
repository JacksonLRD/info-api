import { Router } from 'express';

import VehicleController from '../controllers/VehicleController';

const vehicleRouter = Router();

vehicleRouter.post('/', VehicleController.create);
vehicleRouter.get('/', VehicleController.getAll);
vehicleRouter.get('/:id', VehicleController.getById);
vehicleRouter.patch('/update/:id', VehicleController.update);
vehicleRouter.delete('/remove/:id', VehicleController.remove);

export default vehicleRouter;
