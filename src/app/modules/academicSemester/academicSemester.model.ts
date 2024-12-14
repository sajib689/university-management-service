import { model, Schema } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester
} from './academicSemester.interface';
import { academicSemesterMonths } from './academicSemester.constant';
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

// Create the model using both the document type and the model type
export const AcademicSemester: AcademicSemesterModel = model<
  IAcademicSemester,
  AcademicSemesterModel
>('AcademicSemester', academicSemesterSchema);
