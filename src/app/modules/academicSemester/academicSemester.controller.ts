import { NextFunction, Request, RequestHandler, Response } from 'express';
import createAcademicSemester from './academicSemester.service';

const CreateSemester: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...academicSemester } = req.body;
    const result = await createAcademicSemester(academicSemester);
    res.status(200).json({
      success: true,
      message: `Academic Semester created successfully`,
      data: result
    });
  } catch (err) {
    next(err);
  }
};

export default CreateSemester;
