// Interactors.ts
import { Iinteractors, User, Idatabase } from './interface';

export class Interactors implements Iinteractors {
  private database: Idatabase;

  constructor(database: Idatabase) {
    this.database = database;
  }

  createInteractor(user: User): User {
    // Call the createUsers method of the database
    return this.database.createUsers(user);
  }

  findInteractor(): User[] {
    // Call the findAllUsers method of the database
    return this.database.findAllUsers();
  }
}
