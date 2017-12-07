import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
     this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
     this.heroService.getHeroes()
    .subscribe(heroes => this.heros = heroes);
  }

}
