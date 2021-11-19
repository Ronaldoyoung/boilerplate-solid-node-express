import * as express from 'express';
import Logger from './logger';
import expressLoader from './express';
import dependencyInjector from './dependencyInjector';
import { sequelize } from './sequelize';

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await sequelize.sync({ force: false });
  Logger.info('DB loaded and connected!');

  await dependencyInjector();

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
}