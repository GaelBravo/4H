import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './ejer1/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejer1/ejercicio2/ejercicio2.component';

const routes: Routes = [
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'home', component: Ejercicio2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
