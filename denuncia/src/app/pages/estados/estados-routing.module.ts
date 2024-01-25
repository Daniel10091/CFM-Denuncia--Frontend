import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosComponent } from './estados.component';

const ESTADOS_ROUTES: Routes = [
  { path: '', component: EstadosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ESTADOS_ROUTES)],
  exports: [RouterModule]
})
export class EstadosRoutingModule { }
