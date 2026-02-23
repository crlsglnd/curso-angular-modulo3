import { Routes } from '@angular/router';
import { Login } from '../app/pages/login/login';
import { Dashboard } from '../app/pages/dashboard/dashboard';
import { authGuard } from '../app/guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: 'dashboard', 
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
  path: '',
  component: Dashboard
}
];