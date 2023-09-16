import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ACComponent } from './ac/ac.component';
import { ALComponent } from './al/al.component';
import { AMComponent } from './am/am.component';
import { StatesRoutingModule } from './states-routing.module';
import { StatesComponent } from './states.component';

@NgModule({
  declarations: [
    ALComponent,
    ACComponent,
    AMComponent,
    StatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StatesRoutingModule
  ],
  exports: [
    StatesComponent
  ]
})
export class StatesModule { }
