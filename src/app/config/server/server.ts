import 'express-async-errors';
import express from 'express';

import createMiddlewares from '../infra/middlewares/middlewares';

export default function createServer() {
  const port = process.env.PORT || 3000;

  const app = express();
  createMiddlewares(app);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  return app;
}
