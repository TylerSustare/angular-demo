import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() // Injectable decorator -> Angular may need to inject dependencies into this service 
export class HeroService{
    getHeroes(): Promise<Hero[]>{ // like Task<T> in C#
        return Promise.resolve(HEROES); // like await in C#
    } //  can get this data from anywhere. Web service for example 
}

 