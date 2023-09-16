import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACComponent } from './ac/ac.component';
import { ALComponent } from './al/al.component';
import { AMComponent } from './am/am.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'ac', 
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule { }
