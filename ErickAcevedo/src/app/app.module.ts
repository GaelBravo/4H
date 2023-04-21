import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejer1Component } from './ejercicio/ejer1/ejer1.component';
import { FormsModule } from '@angular/forms';
import { Ejer2Component } from './ejercicio/ejer2/ejer2.component';


@NgModule({
  declarations: [
    AppComponent,
    Ejer1Component,
    Ejer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
