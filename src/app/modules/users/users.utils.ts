import { User } from './users.model';

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1
    })
    .lean();

  return lastUser?.id;
};

export const generateUserId = async () => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0');
  const incrementId = await (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0');
  return incrementId;
  // lastUserId++;
  // return String(lastUserId).padStart(5, '0')
};
