import { Routes } from '@angular/router';
import { RUTAS } from './constants/rutas';
// import RutaUnoComponent from './componentes/ruta-uno/ruta-uno.component';
// import { RutaUnoComponent } from './componentes/ruta-uno/ruta-uno.component';

export const routes: Routes = [
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
  //   // loadComponent: () => import('./componentes/ruta-uno/ruta-uno.component').then(m => m.RutaUnoComponent),
  //   loadChildren: () => import('./componentes/ruta-uno/ruta-uno.routes').then(r => r.routes)
  // },
  {
    path: RUTAS.auth,
    loadChildren: () => import('./componentes/auth/auth.routes').then(r => r.routes)
  },
  // {
  //   path: 'usuario/:id',
  //   loadComponent: () => import('./componentes/ruta-uno/ruta-uno-detalle/ruta-uno-detalle.component').then(m => m.RutaUnoDetalleComponent),
  // }
];
