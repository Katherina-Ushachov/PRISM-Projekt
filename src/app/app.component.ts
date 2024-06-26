import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IdentifyComponent} from './identify/identify.component';
import { RiddleComponent } from './riddle/riddle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IdentifyComponent, RiddleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P.R.I.S.M';
}
