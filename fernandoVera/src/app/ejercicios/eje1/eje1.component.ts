import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title: string = "Empresa de Angel SA de CV";

  protected email: string = "";
  protected password: string = "";
  protected usuarios = [
                        {usr:"fernando@l.com",psw:"1234",nombre:"Angel Vera Ortiz"},
                        {usr:"rubi@l.com",psw:"12345",nombre:"Rubi Ruiz Ramiez"},
                        {usr:"murcia@l.com",psw:"123456",nombre:"Monica Murcia Liborio"}
                      ];

  public validar() : void{
    for(let i = 0; i <this.usuarios.length; i++){
      if(this.email == this.usuarios[i].usr && this.password == this.usuarios[i].psw){
        alert("Bienvenido al sistema " + this.title);
        return;
      }
        
      alert("El usuario o la contraseña no son correctas");
    }
  }
}
