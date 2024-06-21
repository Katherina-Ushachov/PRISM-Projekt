import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identify',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './identify.component.html',
  styleUrl: './identify.component.css'
})
export class IdentifyComponent {
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required)
  });

}
