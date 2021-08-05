/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

import * as compression from 'compression';
import * as helmet from 'helmet';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
import * as csurf from 'csurf';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'verbose'],
  });

  app.use(compression());
  app.use(helmet());
  app.use(favicon(join(__dirname, 'assets', 'favicon.ico')));
  app.use(morgan('dev'));

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
  app.use(csurf());
}

bootstrap();
