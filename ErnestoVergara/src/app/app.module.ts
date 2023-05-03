import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Eje1Component } from './ejercicios1/eje1/eje1.component';
import { FormsModule } from '@angular/forms';
import { Eje2Component } from './ejercicio/eje2/eje2.component';

@NgModule({
  declarations: [
    AppComponent,
    Eje1Component,
    Eje2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
