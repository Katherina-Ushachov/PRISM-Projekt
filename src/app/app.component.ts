import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonComponentComponent } from './my-button-component/my-button-component.component';
import {IdentifyComponent} from './identify/identify.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButtonComponentComponent, IdentifyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P.R.I.S.M';
}
