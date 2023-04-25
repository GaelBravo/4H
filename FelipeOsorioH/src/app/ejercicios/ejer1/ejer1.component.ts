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
  protected usuarios=[
    {usr:"felipe@gmail.com", psw:"1234", nombre:"FelipeOsorioHernandezOder"}
    {usr:"felix@gmail.com", psw:"4321", nombre:"FelixOsorioHernandezOder"}
    {usr:"Macaqinho@gmail.com", psw:"3412", nombre:"MacaquinhoOsorioHernandezOder"}
  ];

  validar(){
    for(let i=0;i<this.usuarios.length; i++){

      if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
        alert(this.usuarios[i].nombre + "bienvenido al sistema" + this.title);
      }

    }
      alert("el usuario y la contraseña no coinciden: ");
     }
  }
