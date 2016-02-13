import {Component} from 'angular2/core';
import {HeroesTourComponent} from './heroes-tour/heroes-tour.component';

@Component({
  selector: 'my-app',
  template: `
    <heroes-tour></heroes-tour>
  `,
  directives: [HeroesTourComponent]
})

export class AppComponent { }