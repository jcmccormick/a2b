import {Component} from 'angular2/core';
import {UserService} from './user.service';
import {User} from './user';
import {UserListComponent} from './user-select.component';

@Component({
  selector: 'user-select',
  template: `
    <user-select [current_id]="current_user.id"></user-select>
  `,
  providers: [UserService],
  directives: [UserListComponent]
})

export class UserComponent { 
  public current_user: User;

  constructor(_userService: UserService) {
    this.current_user = _userService.current_user;
  }
}