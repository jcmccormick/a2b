import {provide} from 'angular2/core';
import {Logger} from '../../utils/logger.service';
import {UserService} from '../../user/user.service';
import {HeroService} from './hero.service';

let heroServiceFactory = (logger: Logger, userService: UserService) => {
  return new HeroService(logger, userService.current_user.isAuthorized);
}

export let heroServiceProvider =
  provide(HeroService, {
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
  });