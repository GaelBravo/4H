import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ejer1component} from '.ejercicios/ejer1/ejer1component'

const routes: Routes = [
{path:'ejer1', component:ejer1component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
