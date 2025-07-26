import { Routes } from '@angular/router';
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
    loadComponent: () => import('./sing-in.component').then(m => m.SingInComponent),
    children: [
      {
        path: 'componente1',
        loadComponent: () => import('./componente1/componente1.component').then(m => m.Componente1Component),
      },
      {
        path: 'componente2',
        loadComponent: () => import('./componente2/componente2.component').then(m => m.Componente2Component),
      },


    ]
  }
];
