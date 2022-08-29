import express from 'express';
import vehicleRouter from './vehicle.routes';

const routes = express();

routes.use('/vehicles', vehicleRouter);

export default routes;
