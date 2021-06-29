import { Component, OnInit } from '@angular/core';
import { Statistique } from '../statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  lion = new Statistique("Lion", 50, 12000);
  tigre = new Statistique("Tigre", 65, 70000);

  constructor() { }

  ngOnInit(): void {
  }

}
