import ApiError from '../../../errors/ApiError';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

// academicSemester creation functions or methods
const createAcademicSemester = async (
  academicSemester: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  if (
    academicSemesterTitleCodeMapper[academicSemester.title] !==
    academicSemester.code
  ) {
    throw new ApiError(400, 'Invalid Semester');
  }
  const createdSemester = await AcademicSemester.create(academicSemester);
  return createdSemester;
};

type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

// semesters service methods
export const getAllSemester = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOptions;
  const skip = (page - 1) * limit;
  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);
  const total = await AcademicSemester.countDocuments();
  return {
    meta: {
      page,
      limit,
      total
    },
    data: result
  };
};

export default createAcademicSemester;
