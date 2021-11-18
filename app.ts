import * as express from 'express';
import Logger from '@/loaders/logger';
import config from '@/config';
import loaders from '@/loaders';

async function startServer() {
  const app: express.Application = express();

  await loaders({ expressApp: app })

  app.listen(config.port, () => {
    Logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `)
  })
    .on('error', err => {
      Logger.error(err);
  })
}

startServer();