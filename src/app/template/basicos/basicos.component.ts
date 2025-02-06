import { JsonPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-basicos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  @ViewChild('myForm') myForm! : NgForm;

  notValid(field: string): boolean {
    return this.myForm.controls[field].invalid && this.myForm.controls[field].touched
  }

  save(){
    console.log(this.myForm);
    this.myForm.control.markAllAsTouched()
  }

}
