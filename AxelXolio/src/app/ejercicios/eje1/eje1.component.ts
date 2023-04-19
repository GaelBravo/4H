import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
protected title: string = "Empresa de Xolio SA de CV";
protected email: string = "";
protected password: string = "";

validar(){
  if(this.email=="axel@gmail.com" && this.password=="1234"){
    alert("Bienvenido l sistema de la "+ this.title);
  }
  else{
    alert("El usuario y la contraseña son incorrectos")
  }
}

}
