import { Schema } from 'mongoose';
import { IUser } from './users.interface';

export const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true
  }
});
