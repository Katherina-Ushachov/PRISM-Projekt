import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-revelation',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './revelation.component.html',
  styleUrl: './revelation.component.css'
})
export class RevelationComponent {
  someContent: boolean = false;

displayInfo() {
  this.someContent = !this.someContent;
}
reloadPage() {
  window.location.reload()
}

}
