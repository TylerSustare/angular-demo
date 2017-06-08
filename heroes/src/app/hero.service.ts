import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() // Injectable decorator -> Angular may need to inject dependencies into this service 
export class HeroService{
    //  can get this data from anywhere. Web service for example 
    getHeroes(): Promise<Hero[]>{ // like Task<T> in C#
        return Promise.resolve(HEROES); // like await in C#
    } 

    getHero(id: number): Promise<Hero>{
        return this.getHeroes().then(e => e.find(f => f.id === id));
    }

    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(p => {
            // simulate slow connection to get heroes
            setTimeout(() => p(this.getHeroes()), 2000);
        });
    }
}

 