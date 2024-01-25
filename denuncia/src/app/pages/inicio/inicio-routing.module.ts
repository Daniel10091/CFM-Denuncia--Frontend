import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';

const INICIO_ROUTES: Routes = [
  { path: '', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(INICIO_ROUTES)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
