import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDS';

  chat = new Statistique("Chat", 20, 125000)
  chien = new Statistique("Chien", 35, 200000)
}
