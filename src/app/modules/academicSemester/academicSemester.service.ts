import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemester = async (
  academicSemester: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  const createdSemester = await AcademicSemester.create(academicSemester);
  return createdSemester;
};

export default createAcademicSemester;
