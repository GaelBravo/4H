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

  validar(){
    if(this.email=="Doraneli@l.comp" && this.password=="1234"){
      alert("Bienevenido al sistema "+ this.title);
    }
    else{
      alert("El usuario y la conraseña no son correctos :(");
    }
  }
}
