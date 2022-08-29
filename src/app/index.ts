import 'reflect-metadata';
import './config/infra/dependencies/dependecyInjector';
import 'dotenv/config';
import 'express-async-errors';

import createServer from './config/server/server';

export const startApplication = () => {
  createServer();
};

startApplication();
