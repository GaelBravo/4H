import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string = 'Empresa de Angel de Jesus';
  protected email:string = '';
  protected password: string = '';

  validar(){
    if(this.email=="angeldejesus@gmail.com" && this.password=="angel1234"){
      alert("Bienvenido al sistema " + this.title)
    }
    else{
      alert("Usuario y contraseña incorrecto");
    }
  }

}
