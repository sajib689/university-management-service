import { model, Model, Schema } from 'mongoose';
import { IUser } from './users.interface';

type userModel = Model<IUser, object>;
export const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
export const User = model<IUser, userModel>('User', userSchema);
