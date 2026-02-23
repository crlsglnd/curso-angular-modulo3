import { Component, OnInit } from '@angular/core';
import { Logger } from '../../core/loggin/logger';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h1>Dashboard</h1>
  `
})
export class Dashboard implements OnInit {

  constructor(private logger: Logger) {}

  ngOnInit() {
    this.logger.log('Dashboard cargado');
  }
}