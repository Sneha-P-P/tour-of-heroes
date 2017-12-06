import { Component, OnInit } from '@angular/core';
import { heroes } from '../heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros = heroes;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
     this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
