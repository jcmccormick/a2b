import {Component} from 'angular2/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'user-select',
  template: `
    <select [(ngModel)]="current_id">
      <option *ngFor="#user of users" value="{{user.id}}"> {{user.id}} </option>
    </select>
    <button (click)="setUser()">Set</button>
  `,
  inputs: ['current_id']
})

export class UserListComponent {

  public users: User[];
  public current_id: number;

  constructor(public _userService: UserService) {

    this.users = _userService.getUsers();

  }

  setUser() {

    this._userService.setUser(this.current_id);

  }
}