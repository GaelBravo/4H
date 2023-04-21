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
  protected usuarios=[{usr:"ernesto@l.com", psw:"2345", nombre:"Ernesto"},
                      {usr:"rubi@l.com", psw:"3456", nombre:"Rubi"},
                      {usr:"murcia@l.com", psw:"4567", nombre:"murcia"}      
                     ];

  validar(){
    for(let i=0; i<this.usuarios.length; i++){
      if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
      alert(this.usuarios[i].nombre + "bienvenido al sistema de la " + this.title);
      return;
    }
    }
    alert("Usuario y contraseña incorrecta ");
  }
  
}
