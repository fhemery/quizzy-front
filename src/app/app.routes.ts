import { Route } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome/welcome-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.routes').then(m => m.loginRoutes)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.routes').then(m => m.registerRoutes)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
