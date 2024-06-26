import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-riddle',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './riddle.component.html',
  styleUrl: './riddle.component.css'
})
export class RiddleComponent {
  profileForm = new FormGroup({
    solution:new FormControl('',Validators.required)
  });
  value: boolean = false;
}

