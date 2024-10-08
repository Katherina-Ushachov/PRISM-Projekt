import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RevelationComponent } from '../revelation/revelation.component';


@Component({
  selector: 'app-riddle',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RevelationComponent],
  templateUrl: './riddle.component.html',
  styleUrl: './riddle.component.css'
})
export class RiddleComponent {

  message = '';
  onMouseOver() {
    this.message = 'Eine Eigenschaft der Links könnte Ihnen weiterhelfen. Welche?';
  }

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
      forbiddenNameValidator(/rot|gruen|grün|blau|gelb|hellblau|türkis|tuerkis|lila|violett|orange|purpur|dunkelblau/)
    ],)
  });
  value: boolean = false;
}
function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {    
    const forbidden = !nameRe.test(control.value);
    console.log('control value', control.value, forbidden)
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };

}



