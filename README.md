# Control flow of Dependency Injection using typescript

This project is a simple **API** built using **TypeScript** and **Express.js**. It demonstrates the use of **Dependency Injection** (DI) to decouple components such as the **Controllers**, **Interactors**, and **Database**. The database operations are handled by an in-memory store.

---

## Project Structure

The project is divided into the following key components:

- **Interfaces**: Defines the abstract methods that the **Database**, **Interactors**, and **Controllers** must implement.
- **Repository**: Implements the `Idatabase` interface and handles in-memory data storage.
- **Interactors**: Implements the `Iinteractors` interface and provides business logic for creating and finding users.
- **Controllers**: Implements the `Icontrollers` interface and handles incoming HTTP requests.

## Requirements

- Node.js (>= 18.x)
- TypeScript
- Express.js

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/user-management-api.git

cd /according_to_your_path
```

2. Install the dependencies:
```bash
npm install

npm install --save-dev typescript @types/express ts-node
```
3. Install TypeScript and Type Definitions (dev dependencies):
```bash
npm install --save-dev typescript @types/express ts-node
```
4. Compile TypeScript and run the application:
```bash
npx ts-node src/app.ts
```
5. Hit endpoints using request.http
```bash
endpoints can be used using request.http file provided with the repo

# Create a New User

POST http://localhost:3000/user
Content-Type: application/json

{
  "name": "Jack",
  "age": 30
}


# Get All Users

GET http://localhost:3000/users


```