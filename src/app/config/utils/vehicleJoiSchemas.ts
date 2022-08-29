import Joi from 'joi';

export const createVehicleSchema = Joi.object()
  .keys({
    placa: Joi.string().allow('').required(),
    chassi: Joi.string().required(),
    renavam: Joi.string().allow('').required(),
    modelo: Joi.string().required(),
    marca: Joi.string().required(),
    ano: Joi.number().required(),
  })
  .required();

export const updateVehicleSchema = Joi.object()
  .keys({
    placa: Joi.string().allow('').required(),
    renavam: Joi.string().allow('').required(),
  })
  .required();
