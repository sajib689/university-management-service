import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import usersRoute from './app/modules/users/users.route';
import semesterRoute from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();
// parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
console.log(app.get('env'));
app.use('/api/v1/users/', usersRoute);
app.use('/api/v1/semesters/', semesterRoute);

// Testing server
app.get('/', (req: Request, res: Response) => {
  res.send('Working directory');
});
export default app;
