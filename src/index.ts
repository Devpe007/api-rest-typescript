import express from 'express';

import { AppDataSource } from './database/data-source';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.get('/', (request, response) => response.json('tudo certo'));

  return app.listen(3333, () => console.log('Server is running on port 3333'));
});
