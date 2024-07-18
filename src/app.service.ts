import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { users } from './database/users.db';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Injectable()
export class AppService {
  constructor(
    @InjectMetric('PROM_METRIC_USER_NOT_FOUND_COUNTER')
    private readonly userNotFoundCounter: Counter<string>,
  ) {}

  getUsers(): User[] {
    return users;
  }

  getById(id: number): User {
    const user: User = users.find((user) => user.id == id);

    console.log(user);

    if (!user) {
      console.log('User not found with ID:', id);
      this.userNotFoundCounter.inc();
      return null;
    }

    return user;
  }
}
