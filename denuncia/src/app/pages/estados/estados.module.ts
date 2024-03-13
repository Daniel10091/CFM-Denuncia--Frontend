import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstadosRoutingModule } from './estados-routing.module';

// Primeng
import { ButtonModule } from 'primeng/button';
import { ALComponent } from './al/al.component';
import { ACComponent } from './ac/ac.component';
import { AMComponent } from './am/am.component';

@NgModule({
  declarations: [
    ACComponent,
    ALComponent,
    AMComponent,
    // StatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EstadosRoutingModule,
    // Primeng
    ButtonModule 
  ],
  exports: [
    // EstadosComponent
  ]
})
export class EstadosModule { }
