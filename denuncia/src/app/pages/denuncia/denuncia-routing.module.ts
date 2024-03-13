import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenunciaComponent } from './denuncia.component';

const DENUNCIA_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crvirtual',
        component: DenunciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DENUNCIA_ROUTES)],
  exports: [RouterModule]
})
export class DenunciaRoutingModule { }
