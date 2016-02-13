import {Component} from 'angular2/core';
import {UserComponent} from '../user/user.component';
import {HeroesComponent} from './heroes/heroes.component';
import {Logger} from '../utils/logger.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'heroes-tour',
  template: `
    <user-select></user-select>
    <my-heroes></my-heroes>
  `,
  directives: [UserComponent, HeroesComponent],
  providers: [Logger, UserService]
})

export class HeroesTourComponent { }