import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ACComponent } from './ac/ac.component';
import { ALComponent } from './al/al.component';
import { AMComponent } from './am/am.component';
import { DenunciaComponent } from '../denuncia/denuncia.component';

const ESTADOS_ROUTES: Routes = [
  {
    path: '',
    children:[
      {
        path: 'ac', 
        component: ACComponent
        // loadChildren: () => import('./ac/ac.module').then(m => m.ACModule)
      },
      {
        path: 'al', 
        component: ALComponent
        // loadChildren: () => import('./al/al.module').then(m => m.ALModule)
      },
      {
        path: 'am', 
        component: AMComponent
        // loadChildren: () => import('./am/am.module').then(m => m.AMModule)
      },
      // {
      //   path: '**', 
      //   redirectTo: '/404'
      // }
      {
        path: 'ap',
        component: DenunciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ESTADOS_ROUTES)],
  exports: [RouterModule]
})
export class EstadosRoutingModule { }
