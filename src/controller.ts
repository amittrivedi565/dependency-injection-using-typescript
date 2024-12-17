// Controllers.ts
import { Icontrollers, Iinteractors, User } from './interface';
import { Request, Response } from 'express';

export class Controllers implements Icontrollers {
  private interactor: Iinteractors;

  constructor(interactor: Iinteractors) {
    this.interactor = interactor;
  }

  createControllers(req: Request, res: Response): void {
    const { name, age } = req.body;

    const data = { name: name, age: age };
    const newUser = this.interactor.createInteractor(data);

    res.json(newUser); // Send back the newly created user
  }

  findControllers(req: Request, res: Response): void {
    const data = this.interactor.findInteractor();
    res.json(data); // Send all users
  }
}
