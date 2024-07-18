import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { users } from './database/users.db';

@Injectable()
export class AppService {
  getUsers(): User[] {
    return users;
  }

  getById(id: number): User {
    return users.find((user) => user.id == id);
  }
}
