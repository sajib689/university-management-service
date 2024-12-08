import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../../interfaces/error';
import handleValidationError from '../../errors/handleValidationError';
import ApiError from '../../errors/ApiError';
import config from '../../config';
import { errorLogger } from '../../shared/logger';

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  config.env === 'development'
    ? console.log('Global Error Handler', err)
    : errorLogger.error('Global Error Handler', err);

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessage: IGenericErrorMessage[] = [];

  // Check if the error is a Mongoose ValidationError
  if (err instanceof mongoose.Error.ValidationError) {
    const simplifiedError = handleValidationError(err);
    // Validation errors typically return a 400 status code
    statusCode = 400;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message
          }
        ]
      : [];
  } else if (err instanceof Error) {
    message = err.message;
    errorMessage = err.message
      ? [
          {
            path: '',
            message: err?.message
          }
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: process.env.NODE_ENV !== 'production' ? err?.stack : undefined
  });
  next();
};

export default globalErrorHandler;
