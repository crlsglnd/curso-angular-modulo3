import { Injectable } from '@angular/core';
import { ServicioBase } from './servicio-base.service';

@Injectable()
export class ServicioAvanzado extends ServicioBase {

  override mensaje(): string {
    return "Mensaje desde Servicio Avanzado";
  }

}