import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-riddle',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './riddle.component.html',
  styleUrl: './riddle.component.css'
})
export class RiddleComponent {

  submitted = false;
solution: any;

onSubmit() {
  this.submitted = true;
  console.warn(this.profileForm.value);
}
  profileForm = new FormGroup({
    solution: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      forbiddenNameValidator(/rot|gruen|grün|blau|gelb|hellblau|türkis|tuerkis|lila|violett|orange|purpur|dunkelblau)
    ],)
  });
  value: boolean = false;
}
function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };

  
}



