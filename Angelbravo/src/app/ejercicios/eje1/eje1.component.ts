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
  protected usuarios=[
    {usr:"ernesto@l.com",psw:"1234"},
    {usr:"rubi@l.com",psw:"12345"},
    {usr:"murcia@l.com",psw:"123456"}
  ];

  validar(){
    for(let i=0; i<this.usuarios.length; i++){
      if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
        alert("Bienvenido al sistema " + this.title)
        return;
      }
    }
    
  }

}
