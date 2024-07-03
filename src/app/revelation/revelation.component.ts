import { Component } from '@angular/core';

@Component({
  selector: 'app-revelation',
  standalone: true,
  imports: [],
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
