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

  selectPurple1() {
    this.purple1 = !this.purple1;
  }

  selectPurple2() {
    this.purple2 = !this.purple2;
  }

  selectPurple3() {
    this.purple3 = !this.purple3;
  }

  selectPurple4() {
    this.purple4 = !this.purple4;
  }

  selectBlue1() {
    this.blue1 = !this.blue1;
  }

  selectBlue2() {
    this.blue2 = !this.blue2;

  }

  selectBlue3() {
    this.blue3 = !this.blue3;
  }

  selectBlue4() {
    this.blue4 = !this.blue4;
  }

  selectCerulean1() {
    this.cerulean1 = !this.cerulean1;
  }

  selectCerulean2() {
    this.cerulean2 = !this.cerulean2;
  }

  selectCerulean3() {
    this.cerulean3 = !this.cerulean3;
  }

  selectCerulean4() {
    this.cerulean4 = !this.cerulean4;
  }

  selectGreen1() {
    this.green1 = !this.green1;
  }

  selectGreen2() {
    this.green2 = !this.green2;
  }

  selectGreen3() {
    this.green3 = !this.green3;
  }

  selectGreen4() {
    this.green4 = !this.green4;
  }

  selectYellow1() {
    this.yellow1 = !this.yellow1;
  }

  selectYellow2() {
    this.yellow2 = !this.yellow2;
  }

  selectYellow3() {
    this.yellow3 = !this.yellow3;
  }

  selectYellow4() {
    this.yellow4 = !this.yellow4;
  }

  selectOrange1() {
    this.orange1 = !this.orange1;
  }

  selectOrange2() {
    this.orange2 = !this.orange2;
  }

  selectOrange3() {
    this.orange3 = !this.orange3;
  }

  selectOrange4() {
    this.orange4 = !this.orange4;
  }

  selectRed1() {
    this.red1 = !this.red1;
  }

  selectRed2() {
    this.red2 = !this.red2;  
  }

  selectRed3() {
    this.red3 = !this.red3;
  }

  selectRed4() {
    this.red4 = !this.red4;
  }
}
