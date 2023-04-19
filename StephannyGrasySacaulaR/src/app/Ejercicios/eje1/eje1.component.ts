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

  validar(){
    if(this.email=="stephanny@l.com" && this.password == "1703M"){
      alert("bienvenido al sistema ʕ·ᴥ·ʔ " + this.title);
    }else{
      alert("El usuario y la contraseña no son correctos ᶘᵒᴥᵒᶅ");
    }

  }

}
