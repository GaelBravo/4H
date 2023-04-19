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

  validar(){
    if(this.email=="francisco@email.com"&&this.password=="1234"){
      alert("Bienvenidos a mi "+this.title)
    }
    else{
      alert("Los datos dados son incorrectos")

    }
  }

}
