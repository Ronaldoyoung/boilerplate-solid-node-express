import { Container } from 'typedi';
import LoggerInstance from './logger';

export default ({ models }: { models: { name: string; model: any} []}) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    })

    Container.set('logger', LoggerInstance);

    LoggerInstance.info('injected into container');
  } catch (err) {
    LoggerInstance.error(' Error on dependacy injector loader: %o', err);
  }
}