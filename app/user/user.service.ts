import {Injectable} from 'angular2/core';
import {User} from './user';
import {USERS} from './mock-users';

@Injectable()
export class UserService {

  public current_user: User;

  constructor() {
    this.current_user = USERS[0];
  }

  setUser(id:number) {
    this.current_user = USERS.filter(user => user.id == id)[0];
  }

  getUsers() {
    return USERS;
  }

}