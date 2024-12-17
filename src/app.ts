// app.ts
import express, { Request, Response } from 'express';
import { Repository } from './repository';
import { Interactors } from './interactor';
import { Controllers } from './controller';


// Create instances of the services and inject dependencies
const repository = new Repository();
const interactors = new Interactors(repository);
const controllers = new Controllers(interactors);

// Create the Express app
const app = express();
app.use(express.json());

app.post('/user', (req: Request, res: Response) => controllers.createControllers(req, res));
app.get('/users', (req: Request, res: Response) => controllers.findControllers(req, res));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
