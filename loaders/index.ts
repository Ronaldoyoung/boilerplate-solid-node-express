import * as express from 'express';
import Logger from './logger';
import expressLoader from './express';

export default async ({ expressApp }: { expressApp: express.Application }) => {
  Logger.info('DB loaded and connected! Not Yet!!');

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
}