import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DenunciaModule } from './pages/denuncia/denuncia.module';
import { EstadosModule } from './pages/estados/estados.module';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';

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
  { 
    path: 'denuncia', 
    loadChildren: () => EstadosModule
  },
  {
    path: 'denuncia/:uf/crvirtual',
    // loadChildren: () => import('./pages/denuncia/denuncia.module').then(m => m.DenunciaModule)
    component: DenunciaComponent
    // loadChildren: () => DenunciaModule
  },
  // {
  //   path: '**', 
  //   redirectTo: '404'
  // },
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
