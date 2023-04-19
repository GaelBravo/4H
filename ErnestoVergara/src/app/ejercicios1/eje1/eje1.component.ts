import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component { 

  protected title: string ="empresa de Ernesto SA de CV";
  protected email:string ="";
  protected password:string =""; 

  validar(){
    if(this.email=="Ernesto@1.com"&&this.password=="1234"){
      alert("Bienvenidos a este gran sistema "+ this.title);
    }
    else{
      alert("El ususario o la contraseña no son correctos");
    }
  }

}
