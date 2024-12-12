import { model, Schema } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester
} from './academicSemester.interface';

// Define the schema for academic semester
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    startMonth: {
      type: String,
      required: true
    },
    endMonth: {
      type: String,
      required: true
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
