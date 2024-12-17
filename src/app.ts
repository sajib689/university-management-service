import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();
// parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
console.log(app.get('env'));
app.use('/api/v1/', router);

// global error handler
app.use(globalErrorHandler);

// not found error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: '.',
        message: 'Api Not Found'
      }
    ]
  });
  next();
});
// Testing server
app.get('/', (req: Request, res: Response) => {
  res.send('Working directory');
});
export default app;
