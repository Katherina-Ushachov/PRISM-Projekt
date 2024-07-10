import { Component} from '@angular/core';
import { SchlusselementComponent } from "../schlusselement/schlusselement.component";
import { RandomService } from '../random.service';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  imports: [SchlusselementComponent]

})


export class GameComponent {
  constructor(randomService: RandomService) { }

  callService(){}

[x: string]: any;
 

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

  randomPurpleResult(length: number) {
    
    let purpleResults = [`Ihre violette Begleitung heißt ${this.purpleLabel[this.purple]} . ${this.purpleLabel[this.purple]} ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird ${this.purpleLabel[this.purple]}  Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. <br> Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von ${this.purpleLabel[this.purple]}- Stabilität und innere Ruhe zu gewährleisten. Aber ${this.purpleLabel[this.purple]}} ist auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskommitee! `, `Test-Text 1  ${this.purpleLabel[this.purple]}`, `Text 2  ${this.purpleLabel[this.purple]} `,`Beispiel  ${this.purpleLabel[this.purple]}`]
    let resultpurple = '';
    for (let i = 0; i < purpleResults.length; i++) {
      resultpurple += purpleResults[(Math.floor(Math.random() * purpleResults.length))];
    }
    return resultpurple;
  }

}
