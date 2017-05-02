import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService){} // Now Angular knows to supply an instance of the HeroService when it creates an AppComponent. According to angular docs 'constructors should not contain complex logic'. Constructors are for simple initialization. 

  // properties 
  heroes: Hero[];
  selectedHero: Hero;

  // methods 
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



