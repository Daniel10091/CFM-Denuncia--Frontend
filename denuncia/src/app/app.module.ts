import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteErrorComponent } from './views/route-error/route-error.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// Components
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { StatesModule } from './views/states/states.module';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { UfSeletionComponent } from './components/uf-seletion/uf-seletion.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteErrorComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    // Components
    HeaderComponent,
    FooterComponent,
    ComplaintComponent,
    UfSeletionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StatesModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
