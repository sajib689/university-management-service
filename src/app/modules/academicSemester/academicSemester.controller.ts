import { NextFunction, Request, Response } from 'express';
import createAcademicSemester from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';

const CreateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    const result = await createAcademicSemester(academicSemester);
    next();
    res.status(200).json({
      success: true,
      message: `Academic Semester created successfully`,
      data: result
    });
  }
);

export default CreateSemester;
