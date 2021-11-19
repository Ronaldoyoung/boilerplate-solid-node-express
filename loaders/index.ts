import * as express from 'express';
import Logger from './logger';
import expressLoader from './express';
import dependencyInjector from './dependencyInjector';
import { sequelize } from './sequelize';
import User  from '@/models/user'

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await sequelize.sync({ force: false });
  Logger.info('DB loaded and connected!');

  const userModel = {
    name: 'userModel',
    model: User
  }

  await dependencyInjector({
    models: [
      userModel
    ]
  });

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
}