import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

  protected title:string = 'changarrito de FelipeOder de CV';
  protected email:string = ''; 
  protected password:string = '';

  validar(){
    if(this.email=="Felipe@oder.com" && this.password=="1234"){
      alert("Bienvenido al sistema : " + this.title);
    }
    else{
      alert("el usuario y la contraseña no coinciden: (");
    }
  }

}
