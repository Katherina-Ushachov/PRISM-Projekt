import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  purple1: boolean = false;
  purple2: boolean = false;
  purple3: boolean = false;
  purple4: boolean = false;

  selectPurple() {
    this.purple1 = !this.purple1;
    this.purple2 = !this.purple2;
    this.purple3 = !this.purple3;
    this.purple4 = !this.purple4;
  }

}
