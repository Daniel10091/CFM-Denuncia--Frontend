import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComplaintModule } from './views/complaint/complaint.module';
import { HomeComponent } from './views/home/home.component';
import { RouteErrorComponent } from './views/route-error/route-error.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: ':uf', 
    loadChildren: () => ComplaintModule
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
