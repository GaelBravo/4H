import { EnvironmentInjector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eje1Component } from './Ejercicios/eje1/eje1.component';

const routes: Routes = [
  {path: 'eje1', component: Eje1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
