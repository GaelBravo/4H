import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

protected title:string = 'Empresa de William SA de CV';
protected email:string = '';
protected password:string = '';
protected usuarios= [{usr:"ernesto@l.com",psw:"1234",nombre:"Ernesto"},
                     {usr:"rubi@l.com",psw:"12345",nombre:"Rubi"},
                     {usr:"murcia@l.com",psw:"123456",nombre:"Monica Murcia"}
                    ];

validar(){
  for(let i=0; i<this.usuarios.length; i++){
  if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
    alert(this.usuarios[i].nombre+"Bienvenid@ al sistema"+ this.title);
    return;
  }
}
  alert("El usuario y/o contraseña no son correctos"); 
} 
}
