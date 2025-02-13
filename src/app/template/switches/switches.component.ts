import { Component } from '@angular/core';
import { Person } from '../../interfaces/persona';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switches',
  imports: [FormsModule],
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {

  person: Person = {
    genre: "F",
    notifications: true
  }

  terms: boolean = false;

  submit(){
    console.log('Se ha enviado el formulario');
  }

}
