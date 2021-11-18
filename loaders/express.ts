import * as express from 'express';
import * as cors from 'cors';
import config from '@/config';
import routes from '@/api';

export default ({ app }: { app: express.Application }) => {
  /**
   * @TODO Explain why they are here
   */

  app.get('status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(cors());
  app.use(express.json());

  // Load API routes
  app.use(config.api.prefix, routes());
}