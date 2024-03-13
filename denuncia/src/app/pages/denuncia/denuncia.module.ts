import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DenunciaRoutingModule } from './denuncia-routing.module';
import { DenunciaComponent } from './denuncia.component';

// Primeng
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

// NG
import { RecaptchaModule } from "ng-recaptcha";

@NgModule({
  declarations: [
    DenunciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DenunciaRoutingModule,
    // Primeng
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule,
    InputTextareaModule,
    ToastModule,
    // NG
    RecaptchaModule
  ]
})
export class DenunciaModule { }
