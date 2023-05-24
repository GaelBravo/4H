import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title: string = "Empresa de Angel SA de CV";

  public email: string = "";
  public password: string = "";

  public validar() : void{
    if(this.email == "fernando.com" && this.password == "1234"){
      alert("Bienvenido al sistema " + this.title);
    }
    else{
      alert("El usuario o la contraseña no son correctas");
    }
  }
}
