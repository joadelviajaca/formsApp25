import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Persona } from '../../interfaces/persona';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dinamicos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  @ViewChild('myForm') myForm!: NgForm;

  persona : Persona = {
    nombre: "Joaquín", 
    favoritos: [{id: 1, nombre: "Fornite"}, {id: 2, nombre: "Super Mario"}]
  }

  notValid(field: string): boolean {
    console.log(field)
    return this.myForm?.controls[field].invalid && this.myForm?.controls[field].touched
  }

  submit(){
    this.myForm.control.markAllAsTouched()
  }

}
