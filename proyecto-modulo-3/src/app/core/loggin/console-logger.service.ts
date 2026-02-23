import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogger extends Logger {

  log(message: string): void {
    console.log('ConsoleLogger:', message);
  }
}