import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})
export class Ejer3Component {
  protected title: string="Fundacion Acevedo"   
  Formulario:FormGroup;
  constructor(private FormBuilder:FormBuilder){
    this.Formulario = this.FormBuilder.group({
      password:['',[
        Validators.required,
        Validators.pattern('^(?=*[a-zA-Z0-9]=$'),
        Validators.minLength(9)

      ]
    ]
    })
  }



}
