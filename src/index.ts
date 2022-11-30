import express from 'express';

import { AppDataSource } from './database/data-source';

import router from './routes';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(router);

  return app.listen(3333, () => console.log('Server is running on port 3333'));
});
