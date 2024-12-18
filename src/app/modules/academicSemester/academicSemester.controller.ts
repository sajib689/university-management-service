import { NextFunction, Request, Response } from 'express';
import createAcademicSemester, {
  getAllSemester
} from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';

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
    const paginationOptions = pick(req.query, paginationFields);
    const result = await getAllSemester(paginationOptions);
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: 200,
      success: true,
      message: 'Semester retrieved successfully',
      data: result.data,
      meta: result.meta
    });
    next();
  }
);

export default CreateSemester;
