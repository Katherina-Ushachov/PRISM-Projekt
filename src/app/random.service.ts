import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  randomPurpleResult(length: number) {
    let purpleResults = ["Ihre violette Begleitung heißt {{purpleLabel[purple]}}. {{purpleLabel[purple]}} ist innerhalb der P.R.I.S.M.-Virtualität dafür zuständig, Euch zu stabilisieren. Die meisten Personen sind nach dem Upload in die P.R.I.S.M.-Virtualität zunächst desorientiert und verunsichert. Sollte dies auch bei Ihnen der Fall sein, wird {{purpleLabel[purple]}} Sie begrüßen und die für Sie individuell berechnete Virtualität zeigen. In der Regel besteht diese aus einem Gemeinschaftsraum, in dem Zeit mit den NPCs verbracht wird, einem Rückzugsort und einem esonderten Raum, dessen Zweck Sie in der Präsentation erfahren werden. <br> Auch nach der Begrüßungssequenz ist dies der wichtigste Zweck von {{ purpleLabel[purple]}} - Stabilität und innere Ruhe zu gewährleisten.Aber {{ purpleLabel[purple]}} ist auch die Person mit der extravagantesten Garderobe und einem überschwänglichen Gemüt - perfekt für ein Begrüßungskommitee!", "Test-Text 1  {{purpleLabel[purple]}}", "Text 2  {{purpleLabel[purple]}}", "Beispiel  {{purpleLabel[purple]}}"]
    let resultpurple = '';
    for (let i = 0; i < purpleResults.length; i++) {
      resultpurple += purpleResults[(Math.floor(Math.random() * purpleResults.length))];
    }
    return resultpurple;
  }

}
