import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {

  protected title:string = 'Empresa de Doraneli SA DE CV';
  protected email:string = '';
  protected password:string = '';
  protected usuarios =[
                       {usr:"Ernesto@l.com",psw:"1234",nombre:"Ernesto Vergara Ortiz"},
                       {usr:"Maria@l.com",psw:"12345",nombre:"Maria Murillo Alvarado"},
                       {usr:"Murcia@l.com",psw:"123456",nombre:" Monica Murcia Liborio"}
                      ];


  validar(){
    for(let i=0; i<this.usuarios.length; i++){
      if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
        alert(this.usuarios[i].nombre+" Bienvenido al sistema de la "+ this.title);
        return;
      }
    }
   alert("Usuario y contraseña incorrectos");
  }
}
