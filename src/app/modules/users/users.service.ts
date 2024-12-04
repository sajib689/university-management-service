import config from '../../../config';
import { generateUserId } from './users.utils';
import { IUser } from './users.interface';
import { User } from './users.model';
import ApiError from '../../../errors/ApiError';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //   create a new user id
  const id = await generateUserId();
  user.id = id;
  //   create a new user password
  if (!user.password) {
    user.password = config.defaultUserPasswords as string;
  }
  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(404, `Failed to create user`);
  }
  return createdUser;
};

export default {
  createUser
};
