// interface.ts
import { Request, Response } from 'express';

// Structure for user body
export type User = {
  name: string;
  age: string;
}

// Abstract method for Repository
export interface Idatabase {
  createUsers(user: User): User;
  findAllUsers(): User[];
}

// Abstract method for Interactors
export interface Iinteractors {
  createInteractor(user: User): User;
  findInteractor(): User[];
}

// Abstract method for Controllers
export interface Icontrollers {
  createControllers(req: Request, res: Response): void;
  findControllers(req: Request, res: Response): void;
}
