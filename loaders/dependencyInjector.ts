import { Container } from 'typedi';
import LoggerInstance from './logger';

export default () => {
  try {
    Container.set('logger', LoggerInstance);

    LoggerInstance.info('injected into container');
  } catch (err) {
    LoggerInstance.error(' Error on dependacy injector loader: %o', err);
  }
}