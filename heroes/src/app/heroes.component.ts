import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit{

  // properties 
  heroes: Hero[];
  selectedHero: Hero;

  // methods 
  constructor(
    private heroService: HeroService)
    {} // Now Angular knows to supply an instance of the HeroService when it creates an AppComponent. According to angular docs 'constructors should not contain complex logic'. Constructors are for simple initialization. 

  ngOnInit():void{
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void{ // to get the private heroes variable from the getHeroes() getter
    this.heroService.getHeroes().then(h => this.heroes = h);
  }

}



