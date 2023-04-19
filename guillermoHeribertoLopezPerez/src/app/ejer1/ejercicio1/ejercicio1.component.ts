import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
  protected title: string = "Empresa de Guillermo SA de CV";
  protected correo: string = '';
  protected password: string = '';

  constructor(){}

  public acceso(): void {
    if(this.correo == "guiller@gmail.com" && this.password == "guiller123"){
      alert(`Bienvenido al sistema: ${this.title}`);
    } else {
      alert("El usuario o la contraseña no son correctos");
    }
  }

  ngOnInit(): void {

  }
}
