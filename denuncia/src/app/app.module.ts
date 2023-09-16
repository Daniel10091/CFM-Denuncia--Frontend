import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintModule } from './views/complaint/complaint.module';
import { RouteErrorComponent } from './views/route-error/route-error.component';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Primeng
import { DropdownModule } from 'primeng/dropdown';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { StatesComponent } from './views/states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteErrorComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    // Components
    HeaderComponent,
    StatesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComplaintModule,

    BrowserAnimationsModule,
    
    // Primeng
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
