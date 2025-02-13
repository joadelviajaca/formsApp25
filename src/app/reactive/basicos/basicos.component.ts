import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  // myForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('Patatas'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0)
  // })
  // constructor(private fb: FormBuilder){}

  private fb: FormBuilder = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  })

  isValidField(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  submit(){
    if(this.myForm.valid){
      console.log('Formulario enviado');
      this.myForm.reset({
        nombre: 'Patatas',
        precio: 0
      })
    }
    else{
      this.myForm.markAllAsTouched();
    }
  }

}
