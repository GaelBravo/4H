import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string ='empresa de Francisco SA de CV';
  protected email:string ='';
  protected password:string ='';
  protected usuarios = [
    {usr:"francisco@l.com", psw:"1234"},
    {usr:"felipe@l.com", psw:"12345"},
    {usr:"rubi@l.com", psw:"123456"}
  ];

  validar(){
    for(let i = 0; i < this.usuarios.length; i ++) {
      if(this.email == this.usuarios[i].usr && this.password == this.usuarios[i].psw){
        alert("Bienvenidos al sistema " + this.title)
        return;
      }
    }
    alert("El usuario y la contraseña son incorrectos");
  }

}
