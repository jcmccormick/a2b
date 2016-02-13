import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero-list',
  template: `
    <div *ngFor="#hero of heroes; #i=index">
      {{hero.$index}}

      <span [style.color]="true ? 'red' : ''" [style.fontSize.em]="i%2===0 ? 2 : 1">{{hero.id}} - {{hero.name}}</span>
    </div>
  `
})

export class HeroListComponent {

  public heroes: Hero[];

  constructor(public _heroService: HeroService) {

    this.heroes = _heroService.getHeroes();

  }
}