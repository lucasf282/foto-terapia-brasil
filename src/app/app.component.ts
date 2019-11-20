import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBars = faBars
  title = 'foto-terapia-brasil';
  public toggleMenuStatus: boolean = false;

  toggleMenu() {
    this.toggleMenuStatus = !this.toggleMenuStatus;
  }
}
