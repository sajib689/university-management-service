import { NextFunction, Request, Response } from 'express';
import createAcademicSemester from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

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

export default CreateSemester;
