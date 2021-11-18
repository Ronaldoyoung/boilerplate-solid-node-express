import * as express from 'express';
import * as cors from 'cors';

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
}