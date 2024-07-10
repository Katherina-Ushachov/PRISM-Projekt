import { Component, inject } from '@angular/core';
import { SchlusselementComponent } from "../schlusselement/schlusselement.component";
import { RandomService } from '../random.service';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  imports: [SchlusselementComponent, RandomService]
})



export class GameComponent {
[x: string]: any;
 
RandomService = inject(RandomService)

  purple: number = -1;
  purpleLabel: Array<string> = ["Lila", "Violet", "Lavendar", "Mauve"]

  blue: number = -1;
  blueLabel: Array<string> = ["Indigo", "Azul", "Livia", "Sini"]

  cerulean: number = -1;
  ceruleanLabel: Array<string> = ["Cerulean", "Aqua", "Kaltrina", "Sunil"]

  green: number = -1;
  greenLabel: Array<string> = ["Chloe", "Emerald", "Olive", "Midori"]

  yellow: number = -1;
  yellowLabel: Array<string> = ["Amber", "Blain", "Flavian", "Rozerin"]

  orange: number = -1;
  orangeLabel: Array<string> = ["Clementine", "Alani", "Peach", "Gintaras"]

  red: number = -1;
  redLabel: Array<string> = ["Ginger", "Ruby", "Scarlet", "Adam"]


  


  selectPurple(i: number) {
    if (this.purple != i) {
      this.purple = i;
    }
  }


  selectBlue(i: number) {
    if (this.blue != i) {
      this.blue = i
    }
  }


  selectCerulean(i: number) {
    if (this.cerulean != i) {
      this.cerulean = i
    }
  }


  selectGreen(i: number) {
    if (this.green != i) {
      this.green = i
    }
  }

  selectYellow(i: number) {
    if (this.yellow != i) {
      this.yellow = i
    }
  }

  selectOrange(i: number) {
    if (this.orange != i) {
      this.orange = i
    }
  }

  selectRed(i: number) {
    if (this.red != i) {
      this.red = i
    }
  }
}
