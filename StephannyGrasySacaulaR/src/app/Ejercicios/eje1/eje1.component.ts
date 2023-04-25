import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string = 'Empresa de Stephanny Grasy 7N';
  protected email:string = '';
  protected password:string = '';
  protected usuarios = [
                          {usr:"pizza@l.com", psw: "1234"},
                          {usr:"paydequeso@l.com", psw:"12345"},
                          {usr: "aguadehorchata@l.com", psw: "123456"}
                        ];

  validar(){
    for(let i=0; i<this.usuarios.length; i++){

      if(this.email==this.usuarios[i].usr && this.password == this.usuarios[i].psw){
        alert("bienvenido al sistema ʕ·ᴥ·ʔ " + this.title);
        return;
      
      }
    }

    alert("El usuario y la contraseña no son correctos ᶘᵒᴥᵒᶅ");

  }

}
