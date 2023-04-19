import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejer1Component } from './ejercicio/ejer1/ejer1.component';
import { Proyec1Component } from './proyecto/proyec1/proyec1.component';
import { Eje1Component } from './ejercicio/eje1/eje1.component';
import { Pro1Component } from './proyect/pro1/pro1.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejer1Component,
    Proyec1Component,
    Eje1Component,
    Pro1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
