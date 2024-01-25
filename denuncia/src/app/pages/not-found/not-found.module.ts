import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRountingModule } from './not-found-rounting.module';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRountingModule,

    ButtonModule
  ]
})
export class NotFoundModule { }
