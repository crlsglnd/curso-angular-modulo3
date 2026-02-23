import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { API_URL } from '../core/tokens/config.token';
import { agregarElemento } from '../store/elementos.actions';
import { AppDB } from '../core/database/database';

@Injectable({ providedIn: 'root' })
export class ElementosService {

  constructor(
    private http: HttpClient,
    private store: Store,
    private db: AppDB,
    @Inject(API_URL) private apiUrl: string
  ) { }

  obtener() {
    return this.http.get<any[]>(`${this.apiUrl}/elementos`);
  }

  agregar(elemento: any) {
    this.http.post<any>(`${this.apiUrl}/elementos`, elemento)
      .subscribe(async (resp: any) => {

        if (resp.ok) {
          // 1️⃣ Redux
          this.store.dispatch(agregarElemento({ elemento }));
          // 2️⃣ Dexie (IndexedDB)
          await this.db.elementos.add(elemento);
          console.log('Guardado en Dexie correctamente');
        }
      }
    );
  }
}