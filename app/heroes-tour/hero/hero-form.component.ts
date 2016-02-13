import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero/hero-form.component.html'
})

export class HeroFormComponent {

  powers = ['Smart', 'Stupid', 'X-ray Spit', 'Awesome Cannonballs'];

  model = new Hero(18, 'Dr. QtPie', this.powers[3], 'Bad Assery');

  submitted = false;

  active = true;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
      this.model = new Hero(42, '', '');
      this.submitted = false;
      this.active = false;
      setTimeout(() => this.active = true, 0);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}