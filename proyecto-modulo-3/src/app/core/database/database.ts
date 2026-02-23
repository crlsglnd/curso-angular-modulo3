import Dexie, { Table } from 'dexie';

export interface Elemento {
  id?: number;
  nombre: string;
}

export class AppDB extends Dexie {

  elementos!: Table<Elemento, number>;

  constructor() {
    super('AppDB');

    this.version(1).stores({
      elementos: '++id,nombre'
    });
  }

}