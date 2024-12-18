import { IGenericErrorMessage } from './error';
export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};
export type IGenericErrorResponse = {
  statusCode: number | string;
  message: string;
  errorMessage: IGenericErrorMessage[];
};
