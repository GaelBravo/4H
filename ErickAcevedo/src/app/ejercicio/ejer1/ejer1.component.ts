import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

  protected title:string = 'Fundacion Acevedo';
  protected email:string = '';
  protected password:string = '';

  validar(){
    if(this.email=="ErickJoestar@l.com" && this.password=="1718"){
    alert("welcome to the velvet room :) " + this.title)
  }
  else{
    alert("la verdad escoje y parece que no escogiste bien :(")
  }
  }
}