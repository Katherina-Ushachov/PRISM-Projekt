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
  purpleLabel: Array<string> = ["Ihre violette Begleitung heißt Lila. Mögliche Bedeutungen dieses Namens sind „Spiel, Vergnügen“ – erst später wurde der Flieder so genannt und dann davon abgeleitet die Farbe. Lila ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Lila Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Lila - Stabilität und innere Ruhe zu gewährleisten. Aber Lila ist von allen NPCs auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!",
    "Ihre violette Begleitung heißt Violet. Wortwörtlich lässt sich dieser Name mit „das Veilchen“ übersetzen, eine Variante davon – Viola – ist durch Shakespeares „Was ihr wollt“ bekannt geworden. Violet ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Violet Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Violet - Stabilität und innere Ruhe zu gewährleisten. Aber Violet ist von allen NPCs auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!", 
    "Ihre violette Begleitung heißt Lavendar. Wortwörtlich lässt sich dieser Name mit „Lavendel“ übersetzen, es handelt sich also um einen blumigen Namen, passend zu einer blumigen Persönlichkeit. Lavendar ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Lavendar Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Lavendar - Stabilität und innere Ruhe zu gewährleisten. Aber Lavendar ist von allen NPCs auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!", 
    "Ihre violette Begleitung heißt Mauve. Mauve ist die Farbe der wilden Malve und entspricht dem französischen Namen der Pflanze. Die zugehörige Farbe ist ein etwas rötliches Violett, das im neunzehnten Jahrhundert eine an Höfen beliebte Modefarbe war. Mauve ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird Mauve Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem gesonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von Mauve - Stabilität und innere Ruhe zu gewährleisten. Aber Mauve ist von allen NPCs auch die Person mit der extravagantesten, prächtigsten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskomitee!"]

  blue: number = -1;
  blueLabel: Array<string> = ["Ihre dunkelblaue Begleitung im virtuellen Jenseits heißt Indigo. Der Name bedeutet auf Griechisch „blauer Farbstoff“ und steht für ein intensives, tiefes Dunkelblau. In vielen Kulturen gilt es als heilige Farbe und wird mit Weisheit in Verbindung gebracht. Indigos Bewandtnis besteht darin, Sie auch stabil zu halten und zu gewährleisten, dass die Virtualität selbst Sie nicht unter Stress und Druck setzt. Wie bereits erwähnt, steht das Wohlbefinden der Toten an erster Stelle. Indigo ist witzig, charmant und heitert in Momenten der Melancholie auf, hat immer einen klugen Spruch auf den Lippen und einen guten Rat. Außerdem wurde Indigo darauf hin optimiert, Euer Vertrauen zu gewinnen und zuverlässig für Euch da zu sein, wenn Fragen aufkommen. In unseren Tests hat sich ein Großteil der Testpersonen mit Indigo angefreundet.",
    "Ihre dunkelblaue Begleitung im virtuellen Jenseits heißt Azul. Der Name bedeutet „der/die Blaue“, abgeleitet vom spanischen Wort für die Farbe blau. Es ist ein neuerer Name, der erst seit den 1990ern belegt ist, und bringt frischen Wind in die Virtualität. Azuls Bewandtnis besteht darin, Sie auch stabil zu halten und zu gewährleisten, dass die Virtualität selbst Sie nicht unter Stress und Druck setzt. Wie bereits erwähnt, steht das Wohlbefinden der Toten an erster Stelle. Azul ist witzig, charmant und heitert in Momenten der Melancholie auf. Außerdem wurde Azul darauf hin optimiert, Euer Vertrauen zu gewinnen und zuverlässig für Euch da zu sein, wenn Fragen aufkommen. In unseren Tests hat sich ein Großteil der Testpersonen mit Azul angefreundet.",
    "Ihre dunkelblaue Begleitung im virtuellen Jenseits heißt Livia. Der Name bedeutet zum einen „die Blaue“, aber auch „der Olivenbaum“ und „das Leben“. Es ist ein sehr lebensfroher, lebensbejahender Name, was zunächst ironisch erscheinen mag, jedoch gute Gründe hat. Livias Bewandtnis besteht darin, Sie auch stabil zu halten und zu gewährleisten, dass die Virtualität selbst Sie nicht unter Stress und Druck setzt. Wie bereits erwähnt, steht das Wohlbefinden der Toten an erster Stelle. Livia ist witzig, charmant und heitert in Momenten der Melancholie auf. Außerdem wurde Livia darauf hin optimiert, Euer Vertrauen zu gewinnen und zuverlässig für Euch da zu sein, wenn Fragen aufkommen. In unseren Tests hat sich ein Großteil der Testpersonen mit Livia angefreundet.",
    "Ihre dunkelblaue Begleitung im virtuellen Jenseits heißt Sini. Dieser Name stammt aus dem Finnischen und bedeutet „blau“, aber auch „blaue Fee“. Es ist somit ein sehr märchenhafter Name. Sinis Bewandtnis besteht darin, Sie auch stabil zu halten und zu gewährleisten, dass die Virtualität selbst Sie nicht unter Stress und Druck setzt. Ähnlich wie die Farbe Blau, soll Sini Ruhe ausstrahlen. Wie bereits erwähnt, steht das Wohlbefinden der Toten an erster Stelle. Sini ist witzig, charmant und heitert in Momenten der Melancholie auf. Außerdem wurde Sini darauf hin optimiert, Euer Vertrauen zu gewinnen und zuverlässig für Euch da zu sein, wenn Fragen aufkommen. In unseren Tests hat sich ein Großteil der Testpersonen mit Sini angefreundet."
    ]
    

  cerulean: number = -1;
  ceruleanLabel: Array<string> = ["Die hellblaue Begleitung heißt Cerulean. Dieser Name bedeutet „himmelsfarben“ und ist wohl vom lateinischen Wort für „Himmel“ abgeleitet. Ceruleans Zuständigkeitsbereich besteht darin, einige der anderen Farb-NPCs zusammenzuführen und zu ergänzen. Cerulean ist so ruhig und gelassen wie der blaue NPC und hat die stärkende Kraft des grünen NPCs, sowie etwas von der Lebensfreude des gelben NPCs. Allerdings ist Cerulean dabei auch sehr flexibel, lässt sich nicht so leicht von wechselhaften Stimmungen aus der Ruhe bringen und ist zur Stelle, wenn Ihr Euch im virtuellen Nachleben besonders einsam fühlt. Cerulean hilft, mit neuem Mut an die Herausforderung des virtuellen Nachlebens heranzutreten und auf die eigene Intuition zu hören.",
    "Die hellblaue Begleitung heißt Aqua. Wortwörtlich bedeutet dieser Name „Wasser“, abgeleitet ist er von „Aquamarin“, einem blauen Edelstein. Von allen hellblauen NPCs ist Aqua besonders lebhaft. Aquas Zuständigkeitsbereich besteht darin, einige der anderen Farb-NPCs zusammenzuführen und zu ergänzen. Aqua ist so ruhig und gelassen wie der blaue NPC und hat die stärkende Kraft des grünen NPCs, sowie etwas von der Lebensfreude des gelben NPCs. Allerdings ist Aqua dabei auch sehr flexibel, lässt sich nicht so leicht von wechselhaften Stimmungen aus der Ruhe bringen und ist zur Stelle, wenn Ihr Euch im virtuellen Nachleben besonders einsam fühlt. Aqua hilft, mit neuem Mut an die Herausforderung des virtuellen Nachlebens heranzutreten und auf die eigene Intuition zu hören.",
    "Die hellblaue Begleitung heißt Kaltrina. Der Name leitet sich vom albanischen Wort für „blau“ ab und bedeutet sowohl „der blaue Himmel“, als auch „die blauäugige Person“. Von allen hellblauen NPCs ist Kaltrina der hübscheste. Kaltrinas Zuständigkeitsbereich besteht darin, einige der anderen Farb-NPCs zusammenzuführen und zu ergänzen. Kaltrina ist so ruhig und gelassen wie der blaue NPC und hat die stärkende Kraft des grünen NPCs, sowie etwas von der Lebensfreude des gelben NPCs. Allerdings ist Kaltrina dabei auch sehr flexibel, lässt sich nicht so leicht von wechselhaften Stimmungen aus der Ruhe bringen und ist zur Stelle, wenn Ihr Euch im virtuellen Nachleben besonders einsam fühlt. Kaltrina hilft, mit neuem Mut an die Herausforderung des virtuellen Nachlebens heranzutreten und auf die eigene Intuition zu hören.",
    "Die hellblaue Begleitung heißt Sunil. Dieser Name leitet sich von „surya“ für Sonne, und „Nil“ für blau ab, was somit sowas wie „himmelblau“ bedeutet. Wobei es auch andere Deutungen gibt (gutes Blau, tiefes Blau). Sunils Zuständigkeitsbereich besteht darin, einige der anderen Farb-NPCs zusammenzuführen und zu ergänzen. Sunil ist so ruhig und gelassen wie der blaue NPC und hat die stärkende Kraft des grünen NPCs, sowie etwas von der Lebensfreude des gelben NPCs. Allerdings ist Sunil dabei auch sehr flexibel, lässt sich nicht so leicht von wechselhaften Stimmungen aus der Ruhe bringen und ist zur Stelle, wenn Ihr Euch im virtuellen Nachleben besonders einsam fühlt. Sunil hilft, mit neuem Mut an die Herausforderung des virtuellen Nachlebens heranzutreten und auf die eigene Intuition zu hören."]
    

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
