import { Application } from 'express';
import { bootstrap } from './bootstrap';
import 'dotenv/config';
import './modules/db';
import { logger } from './modules/shared/utils/logger';

bootstrap().then(async (app: Application) => {
  const port = Number(process.env.PORT);

  app.listen(port, () => {
    logger.info(
      `Sales automation service - Public Api started on port ${process.env.PORT}`,
    );
  });
});
