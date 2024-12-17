// Repository.ts
import { Idatabase, User } from './interface';

export class Repository implements Idatabase {
  // In-memory database
  private users: User[] = [];

  createUsers(user: User): User {
    this.users.push(user);
    return user;
  }

  findAllUsers(): User[] {
    return this.users;
  }
}
