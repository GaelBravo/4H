import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

protected title:string = 'Empresa de William SA de CV';
protected email:string = '';
protected password:string = '';

validar(){
  if(this.email=="William@l.com" && this.password=="2012"){
    alert("Bienvenido al sistema"+ this.title);
  }
  else{
    alert("El usuario y/o contraseña no son correctos");
  }
}

}