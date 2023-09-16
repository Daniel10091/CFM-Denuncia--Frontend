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
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { StatesModule } from './views/states/states.module';

@NgModule({
  declarations: [
    AppComponent,
    RouteErrorComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    // Components
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StatesModule,

    BrowserAnimationsModule,
    
    // Primeng
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
