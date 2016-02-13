import {Component} from 'angular2/core';
import {heroServiceProvider} from './hero.service.provider';
import {HeroListComponent} from './hero-list.component';

@Component({
  selector: 'my-heroes',
  template: `
    <h2>Heroes</h2>
    <hero-list></hero-list>
  `,
  providers: [heroServiceProvider],
  directives: [HeroListComponent]
})

export class HeroesComponent { }