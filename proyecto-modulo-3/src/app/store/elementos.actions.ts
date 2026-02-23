import { createAction, props } from '@ngrx/store';

export const agregarElemento = createAction(
  '[Elemento] Agregar',
  props<{ elemento: any }>()
);