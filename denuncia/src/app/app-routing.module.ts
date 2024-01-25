import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { StatesModule } from './views/states/states.module';
// import { RouteErrorComponent } from './views/route-error/route-error.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
  { 
    path: '', 
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule)
  },
  // { 
  //   path: 'denuncia/:uf', 
  //   // loadChildren: () => StatesModule
  // },
  // {
  //   path: 'denuncia/:uf/crvirtual',
  //   // loadChildren: () => import('./views/complaint/complaint.module').then(m => m.ComplaintModule)
  // },
  {
    path: '**', 
    redirectTo: '404'
  },
  {
    path: '404', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
