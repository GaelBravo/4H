import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected title: string = "Empresa de Xolio SA de CV";
  passwordForm: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: [
        '', [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]-$'),
          Validators.minLength(8)
        ]
      ],
      email:['',[
        Validators.required,
        Validators.pattern(''),
        Validators.minLength(8)
      ]],
      confirmacionPassword:['',[Validators.required]],
      nombre:['', [Validators.required]],
      lastName:['', [Validators.required]],
      age:['', [Validators.required]],
      phone:['', [Validators.required]]
    },

         { validator: this.ConfirmaPassword }
    );
}
  onSubmit(){
    if(this.passwordForm.valid){
      alert("Formulario Enviado");
    }
  }
  getpassword() {
    let valor = this.passwordForm.get('password')?.value || '';
    return valor;
  }
}