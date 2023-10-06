import { Application } from 'express';
import * as express from 'express';
import * as cors from 'cors';
import AuthRouter from './modules/auth/auth.router';
import { exceptionFilter } from './modules/shared/utils/exception-filter';
import * as morgan from 'morgan';
import * as path from 'path';
import PageRouter from './modules/pages/pages.router';

export async function bootstrap(): Promise<Application> {
  const app: Application = express();
  app.use(
    cors({
      origin: true,
    }),
  );
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use(express.static(path.join(__dirname, './public')));

  app.set('views', path.join(__dirname, './modules/views'));

  app.use(morgan('tiny'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/auth', AuthRouter);
  app.use('/', PageRouter);
  app.use(exceptionFilter);

  return app;
}

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.error(err, 'unhandledRejection');
});

process.on('uncaughtException', (err) => {
  // eslint-disable-next-line no-console
  console.error(err, 'uncaughtException');
});
