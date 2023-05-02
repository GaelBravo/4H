import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  protected title: string = "Empresa de Guillermo SA de CV";
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
    { validator: this.confirmaPassword }
    );
  }

  onSubmit(){
    if(this.passwordForm.valid){
      alert("Formulario Enviado");
    }
  }
}