import { Component, OnInit } from '@angular/core';
import { Statistique } from '../statistique';
import { interval } from 'rxjs';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  lion = new Statistique("Lion", 50, 12000);
  tigre = new Statistique("Tigre", 65, 70000);
  tabAnimal = [new Statistique("Panda", 10, 4500), new Statistique("Koala", 5, 60250)];

  // Permet l'affichage de la ligne après 3 secondes
  longueur = setInterval(() => {
    this.tabAnimal.push(new Statistique("Rat", 14, 4500000));
  }, 3000);

  constructor() { }

  ngOnInit(): void {
  }

}
