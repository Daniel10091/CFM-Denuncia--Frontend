import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RouteErrorComponent } from './views/route-error/route-error.component';
import { StatesModule } from './views/states/states.module';
import { ComplaintComponent } from './views/complaint/complaint.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'denuncia/:uf', 
    loadChildren: () => StatesModule
  },
  {
    path: 'denuncia/:uf/crvirtual',
    component: ComplaintComponent
  },
  {
    path: '**', 
    redirectTo: '404'
  },
  {
    path: '404', 
    component: RouteErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
