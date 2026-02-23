import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { Logger } from './core/loggin/logger';
import { ConsoleLogger } from './core/loggin/console-logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: Logger, useClass: ConsoleLogger }
  ]
};