import { createUserDB, getUserDB } from 'databases/users.js';
import { User } from 'types.js';

export const createUser = async (newUser: User) => {
  const ref = await createUserDB(newUser);

  return await getUserDB(ref.id);
};
