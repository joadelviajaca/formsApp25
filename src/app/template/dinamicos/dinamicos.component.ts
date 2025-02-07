import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Favorito, Persona } from '../../interfaces/persona';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dinamicos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  @ViewChild('myForm') myForm!: NgForm;

  name: string = "";
  persona : Persona = {
    nombre: "Joaquín", 
    favoritos: [{id: 1, nombre: "Fornite"}, {id: 2, nombre: "Super Mario"}]
  }

  id: number = 3;

  notValid(field: string): boolean {
    console.log(field)
    return this.myForm?.controls[field].invalid && this.myForm?.controls[field].touched
  }

  agregarFavorito(){
    const nuevoFavorito: Favorito = {
      id: this.id,
      nombre: this.name
    }
    this.persona.favoritos.push(nuevoFavorito);
    this.id++;
    this.name = '';
  }

  borrarFavorito(id: number){
    this.persona.favoritos = this.persona.favoritos.filter(favorito => favorito.id !== id)
  }

  submit(){
    this.myForm.control.markAllAsTouched()
  }

}
