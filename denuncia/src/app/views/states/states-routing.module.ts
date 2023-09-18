import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACComponent } from './ac/ac.component';
import { ALComponent } from './al/al.component';
import { AMComponent } from './am/am.component';
import { RouteErrorComponent } from '../route-error/route-error.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '', 
        component: ACComponent
      },
      {
        path: 'al', 
        component: ALComponent
      },
      {
        path: 'am', 
        component: AMComponent
      },
      // {
      //   path: '**', 
      //   redirectTo: '/404'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule { }
