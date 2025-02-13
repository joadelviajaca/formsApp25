import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  private fb: FormBuilder = inject(FormBuilder);

  newFavourite: FormControl = this.fb.control('', Validators.required);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    favourites: this.fb.array([
      ['Monkey Island', Validators.required],
      ['Super Mario', Validators.required]
    ], Validators.required)
  })
  
  get favourites(){
    return this.myForm.get('favourites') as FormArray
  }

  isValidField(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  addFavourite(){
    if (this.newFavourite.valid){
      // this.favourites.push(this.newFavourite);
      let newControl = this.fb.control(this.newFavourite.value, Validators.required);
      this.favourites.push(newControl)
      this.newFavourite.reset()
    }
  }

  delete(i: number){
    this.favourites.removeAt(i);
  }
  

  submit(){
    
    if(this.myForm.valid){
      console.log('Formulario enviado');
      this.myForm.reset({
        name: ''
      })
    }
    else{
      this.myForm.markAllAsTouched();
    }
  }

}
