import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonComponentComponent } from './my-button-component/my-button-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButtonComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
