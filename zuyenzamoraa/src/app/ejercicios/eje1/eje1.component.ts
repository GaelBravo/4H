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
validar(){
  if(this.email=="zuyen.com" && this.password=="1234"){
    alert("bienvenido al sistema " + this.title);
  }
  else{
    alert("El usuario o la contraseña es incorrecta :C");
  }
}
}

