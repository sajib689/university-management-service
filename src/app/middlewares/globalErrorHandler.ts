import { NextFunction, Request, Response } from 'express';
import { IGenericErrorMessage } from '../../interfaces/error';

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = 'Something went wrong';
  const errorMessage: IGenericErrorMessage[] = [];
  res.status(400).json({ error: err });

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: process.env.NODE_ENV !== 'production' ? err?.stack : undefined
  });
  next();
};

export default globalErrorHandler;
