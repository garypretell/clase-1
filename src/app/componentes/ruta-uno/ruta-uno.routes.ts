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
    loadComponent: () => import('./ruta-uno.component').then(m => m.RutaUnoComponent),
    children: [
      {
        path: 'uno',
        loadComponent: () => import('./uno/uno.component').then(m => m.UnoComponent),
      },
      {
        path: 'dos',
        loadComponent: () => import('./dos/dos.component').then(m => m.DosComponent),
      },

    ]
  }
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'ruta-uno'
  // },
  // {
  //   path: 'ruta-uno',
  //   // loadComponent: () => import('./componentes/ruta-uno/ruta-uno.component'), //agregando default en export
  //   data: { buttonColor: 'btn btn-danger', titulo: 'RUTA UNO' },
  //   title: 'RUTA-UNO-asasas',
  //   // component: RutaUnoComponent
  //   loadComponent: () => import('./componentes/ruta-uno/ruta-uno.component').then(m => m.RutaUnoComponent),
  // },
  // {
  //   path: 'ruta-uno-detalle/:variable',
  //   loadComponent: () => import('./componentes/ruta-uno/ruta-uno-detalle/ruta-uno-detalle.component').then(m => m.RutaUnoDetalleComponent),
  // }
];
