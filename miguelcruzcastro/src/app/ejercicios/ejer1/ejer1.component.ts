import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

  protected title: string = 'Empresa de Miguel SA de CV' ;
  protected email: string = '';
  protected password: string = '';
  validar(){
    if(this.email=="Miguel.com" && this.password=="1234"){
      alert("bienvenido al sistema " + this.title);
    }
    else{
      alert("El usuario o la contraseña es incorrecta :C");
    }
  }
}