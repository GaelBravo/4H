import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component { 
protected title: string= "Empresa de Zuyen a SA de cv"
protected email: string = '';
protected password: string = '';
protected usuario =[
  {usr:"ernesto@l.com", psw:"1234",nombre:"Ernesto Vergara Ortiz"},
  {usr:"adolfo@l.com", psw:"12345",nombre:"Adolfo Alexander Altamirano Quevedo"},
  {usr:"kevin@l.com", psw:"123456",nombre:"Kevin Uriel Amador Cancio"}
];

validar(){
  for(let i = 0; i < this.usuario.length; i++){
    if(this.email==this.usuario[i].usr && this.password==this.usuario[i].psw){
      alert(this.usuario[i].nombre+" Bienvenido al sistema de " + this.title);
      return;
    }
  }
  alert("Usuario y contraseña incorrectos");
}
}

