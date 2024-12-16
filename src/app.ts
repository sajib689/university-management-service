import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();
// parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
console.log(app.get('env'));
app.use('/api/v1/', router);

// Testing server
app.get('/', (req: Request, res: Response) => {
  res.send('Working directory');
});
export default app;
