import { Component} from '@angular/core';
import { SchlusselementComponent } from "../schlusselement/schlusselement.component";

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  imports: [SchlusselementComponent]

})


export class GameComponent {


[x: string]: any;
 

  purple: number = -1;
  purpleLabel: Array<string> = ["Ihre violette Begleitung heißt Lila. Mögliche Bedeutungen dieses Namens sind „Spiel, Vergnügen“ – erst später wurde der Flieder so genannt und dann davon abgeleitet die Farbe. Lila ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Lila Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. <br> Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Lila - Stabilität und innere Ruhe zu gewährleisten. Aber Lila ist von allen NPCs auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!",

    "Ihre violette Begleitung heißt Violet. Wortwörtlich lässt sich dieser Name mit „das Veilchen“ übersetzen, eine Variante davon – Viola – ist durch Shakespeares „Was ihr wollt“ bekannt geworden. Violet ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Violet Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. <br> Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Violet - Stabilität und innere Ruhe zu gewährleisten. Aber Violet ist von allen NPCs auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!", 
    "Ihre violette Begleitung heißt Lavendar. Wortwörtlich lässt sich dieser Name mit „Lavendel“ übersetzen, es handelt sich also um einen blumigen Namen, passend zu einer blumigen Persönlichkeit. Lavendar ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Lavendar Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. <br> Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Lavendar - Stabilität und innere Ruhe zu gewährleisten. Aber Lavendar ist von allen NPCs auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!", 
    "Ihre violette Begleitung heißt Mauve. Mauve ist die Farbe der wilden Malve und entspricht dem französischen Namen der Pflanze. Die zugehörige Farbe ist ein etwas rötliches Violett, das im neunzehnten Jahrhundert eine an Höfen beliebte Modefarbe war. Mauve ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Mauve Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. <br> Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Mauve - Stabilität und innere Ruhe zu gewährleisten. Aber Mauve ist von allen NPCs auch die Person mit der extravagantesten, prächtigsten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!"]
    
    

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
