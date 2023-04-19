import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {

  protected title:string = 'Empresa de Ayelen SA de CV';

  protected email:string = '';
  protected password:string = '';

  validar(){
    if(this.email=="ayelen@.com" && this.password=="1234"){
      alert("Bienvenido al sistema :)");
    }
    else{
      alert("El usuario y la contraseña no son correctos :(");
    }
  }

}
