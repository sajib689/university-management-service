import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync = (fn: RequestHandler) => {
  return async (
    res: Response,
    req: Request,
    next: NextFunction
  ): Promise<void> => {
    try {
      fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export default catchAsync;
