import { Injectable } from '@angular/core';

@Injectable()
export class ServicioBase {

  mensaje(): string {
    return "Mensaje desde Servicio Base";
  }

}