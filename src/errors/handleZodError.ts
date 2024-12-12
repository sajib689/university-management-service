import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage } from '../interfaces/error';

const handleZodError = (err: ZodError) => {
  const errors: IGenericErrorMessage[] = err.issues.map(
    (issue: ZodIssue): IGenericErrorMessage => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors
  };
};

export default handleZodError;
