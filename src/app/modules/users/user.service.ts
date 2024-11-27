import config from '../../../config';
import { generateUserId } from './user.utils';
import { IUser } from './users.interface';
import { User } from './users.model';

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
    throw new Error(`Failed to create user`);
  }
  return createdUser;
};

export default {
  createUser
};
