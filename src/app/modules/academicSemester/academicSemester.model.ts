import { model, Schema } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester
} from './academicSemester.interface';
import { academicSemesterMonths } from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import status from 'http-status';
// Define the schema for academic semester
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ['Autumn', 'Summer', 'Fall']
    },
    year: {
      type: Number,
      required: true
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03']
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths
    }
  },
  {
    // Add timestamps to track createdAt and updatedAt
    timestamps: true
  }
);
academicSemesterSchema.pre('save', async function (next) {
  const isExit = await AcademicSemester.findOne({
    title: this.title,
    year: Number(this.year)
  });
  if (isExit) {
    throw new ApiError(
      status.CONFLICT as number,
      'Academic Semester already exists'
    );
  }

  next();
});
// Create the model using both the document type and the model type
export const AcademicSemester: AcademicSemesterModel = model<
  IAcademicSemester,
  AcademicSemesterModel
>('AcademicSemester', academicSemesterSchema);
