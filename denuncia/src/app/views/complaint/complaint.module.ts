import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ACComponent } from './ac/ac.component';
import { ALComponent } from './al/al.component';
import { AMComponent } from './am/am.component';
import { ComplaintRoutingModule } from './complaint-routing.module';
import { ComplaintComponent } from './complaint.component';

@NgModule({
  declarations: [
    ALComponent,
    ACComponent,
    AMComponent,
    ComplaintComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComplaintRoutingModule
  ],
  exports: [
    ComplaintComponent
  ]
})
export class ComplaintModule { }
