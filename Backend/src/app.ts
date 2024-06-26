import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
//dotenv
dotenv.config();

const app: Application = express();

const PORT: number | string = process.env.PORT || 8080;

require('./database/db.connection'); //Database connection

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
