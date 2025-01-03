import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/error';
import { IGenericErrorResponse } from '../interfaces/common';

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map((el) => {
    const error = el as mongoose.Error.ValidatorError;
    return {
      path: error.path,
      message: error.message
    };
  });

  const statusCode = 400;
  return {
    statusCode: statusCode,
    message: 'Validator error',
    errorMessage: errors
  };
};

export default handleValidationError;
