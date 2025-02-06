import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-basicos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  save(form:any){
    console.log(form);
  }

}
