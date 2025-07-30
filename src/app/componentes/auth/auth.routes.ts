import { Routes } from '@angular/router';
import { RUTAS } from '../../constants/rutas';
// import RutaUnoComponent from './componentes/ruta-uno/ruta-uno.component';
// import { RutaUnoComponent } from './componentes/ruta-uno/ruta-uno.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '',
    loadComponent: () => import('./auth.component').then(m => m.AuthComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RUTAS.signIn
      },
      {
        path: RUTAS.signIn,
        loadChildren: () => import('./sing-in/sign-in.routes').then(m => m.routes)
        // loadComponent: () => import('./sing-in/sing-in.component').then(m => m.SingInComponent),
      },
      {
        path: RUTAS.signUp,
        loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignUpComponent),
      },
      {
        path: RUTAS.resetPassword,
        loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
      },

    ]
  }
];
