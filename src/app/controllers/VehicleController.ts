import { Request, Response } from 'express';
import Container from 'typedi';

import ICreateVehicleService from '../interfaces/services/ICreateVehicleService';
import IFindVehicleService from '../interfaces/services/IFindVehicleService';
import IRemoveVehicleService from '../interfaces/services/IRemoveVehicleService';
import IUpdateVehicleService from '../interfaces/services/IUpdateVehicleService';

export default class VehicleController {
  public static async create(req: Request, res: Response) {
    try {
      const createVehicleService = Container.get<ICreateVehicleService>('CreateVehicleService');

      const vehicleData = req.body;

      const vehicle = await createVehicleService.execute(vehicleData);

      return res.status(201).json(vehicle);
    } catch (error) {
      throw error;
    }
  }

  public static async getAll(req: Request, res: Response) {
    try {
      const findVehicleService = Container.get<IFindVehicleService>('FindVehicleService');

      const vehicles = await findVehicleService.findAll();

      return res.status(200).json(vehicles);
    } catch (error) {
      throw error;
    }
  }

  public static async getById(req: Request, res: Response) {
    try {
      const findVehicleService = Container.get<IFindVehicleService>('FindVehicleService');
      const { id } = req.params;

      const vehicle = await findVehicleService.findById(id);

      return res.status(200).json(vehicle);
    } catch (error) {
      throw error;
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      const updateVehicleService = Container.get<IUpdateVehicleService>('UpdateVehicleService');
      const { id } = req.params;
      const vehicleData = req.body;

      const vehicle = await updateVehicleService.execute(id, vehicleData);

      return res.status(200).json(vehicle);
    } catch (error) {
      throw error;
    }
  }

  public static async remove(req: Request, res: Response) {
    try {
      const removeVehicleService = Container.get<IRemoveVehicleService>('RemoveVehicleService');
      const { id } = req.params;

      await removeVehicleService.execute(id);

      return res.status(200).json({ status: 'success', message: 'Vehicle Removed' });
    } catch (error) {
      throw error;
    }
  }
}
