import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})
export class Ejer3Component {
  protected title: string='registro de usuario';
passwordform: FormGroup;
constructor ( private formbuilder:FormBuilder){ 
  this.passwordform = this.formbuilder.group({
    password: [['',
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]=$'),
      Validators.minLength(0),
    ]]
    
  });
    
    

}
} 


