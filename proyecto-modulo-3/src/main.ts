import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { App } from '../src/app/app';
import { elementosReducer } from '../src/app/store/elementos.reducer';
import { API_URL } from './app/core/tokens/config.token';
import { Logger } from '../src/app/core/loggin/logger';
import { ConsoleLogger } from '../src/app/core/loggin/console-logger.service';
import { ServicioBase } from '../src/app/core/servicios/servicio-base.service';
import { ServicioAvanzado } from '../src/app/core/servicios/servicio-avanzado.service';
import { AppDB } from '../src/app/core/database/database';
import { routes } from '../src/app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    provideStore({ elementos: elementosReducer }),
    { provide: API_URL, useValue: 'http://localhost:3000' },
    { provide: Logger, useClass: ConsoleLogger },

    ServicioAvanzado,
    { provide: ServicioBase, useExisting: ServicioAvanzado },

    AppDB   // 👈 IMPORTANTE
  ]
});