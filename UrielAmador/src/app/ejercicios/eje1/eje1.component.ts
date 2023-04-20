import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string ="Empresa de Kevin Uriel SA de CV"
  protected email:string ="";
  protected password:string ="";


  validar(){
    if(this.email=="uriel123@gmail.com" && this.password=="uriel123"){
      alert("Bienvenido a la base de datos del sistema de" + this.title);
    }
    else{
      alert("El usuario y la contraseña son incorrecta");
    }
  }

}
