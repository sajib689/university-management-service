import { NextFunction, Request, Response } from 'express';
import createAcademicSemester, {
  getAllSemester
} from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const CreateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    const result = await createAcademicSemester(academicSemester);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Semester created successfully',
      data: result
    });
    next();
  }
);

export const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // create a object for creating the page, limit and the sorting

    const paginationOptions = pick(req.query, paginationFields);
    const result = await getAllSemester(paginationOptions);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Semester retrieved successfully',
      data: result
    });
    next();
  }
);

export default CreateSemester;
