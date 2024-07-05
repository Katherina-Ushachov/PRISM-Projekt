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

  blue1: boolean = false;
  blue2: boolean = false;
  blue3: boolean = false;
  blue4: boolean = false;

  cerulean1: boolean = false;
  cerulean2: boolean = false;
  cerulean3: boolean = false;
  cerulean4: boolean = false;

  green1: boolean = false;
  green2: boolean = false;
  green3: boolean = false;
  green4: boolean = false;

  yellow1: boolean = false;
  yellow2: boolean = false;
  yellow3: boolean = false;
  yellow4: boolean = false;

  orange1: boolean = false;
  orange2: boolean = false;
  orange3: boolean = false;
  orange4: boolean = false;

  red1: boolean = false;
  red2: boolean = false;
  red3: boolean = false;
  red4: boolean = false;

  selectPurple() {
    this.purple1 = !this.purple1;
    this.purple2 = !this.purple2;
    this.purple3 = !this.purple3;
    this.purple4 = !this.purple4;
  }
  selectBlue() {
    this.blue1 = !this.blue1;
    this.blue2 = !this.blue2;
    this.blue3 = !this.blue3;
    this.blue4 = !this.blue4;
  }

  selectCerulean() {
    this.cerulean1 = !this.cerulean1;
    this.cerulean2 = !this.cerulean2;
    this.cerulean3 = !this.cerulean3;
    this.cerulean4 = !this.cerulean4;
  }

  selectGreen() {
    this.green1 = !this.green1;
    this.green2 = !this.green2;
    this.green3 = !this.green3;
    this.green4 = !this.green4;
  }

  selectYellow() {
    this.yellow1 = !this.yellow1;
    this.yellow2 = !this.yellow2;
    this.yellow3 = !this.yellow3;
    this.yellow4 = !this.yellow4;
  }

  selectOrange() {
    this.orange1 = !this.orange1;
    this.orange2 = !this.orange2;
    this.orange3 = !this.orange3;
    this.orange4 = !this.orange4;
  }

  selectRed() {
    this.red1 = !this.red1;
    this.red2 = !this.red2;
    this.red3 = !this.red3;
    this.red4 = !this.red4;
  }
}
