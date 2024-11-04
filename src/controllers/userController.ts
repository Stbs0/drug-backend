import { createUserDB, getUserByEmail, getUserDB } from 'databases/users.js';
import { User } from 'types.js';
import { HashPassword } from 'utils/hashAndCompare.js';

export const createUser = async (newUser: User) => {
  const ref = await createUserDB(newUser);

  return await getUserDB(ref.id);
};

export const signIn = async (credential: { email: string; password: string }) => {
  const { email, password } = credential;
  const user = await getUserByEmail(email);

  if (!user.empty) {
    throw Error('user is found');
  }
  await HashPassword(password);
  // return hash
};
