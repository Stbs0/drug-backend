import { User } from 'types.js';
import { usersRefs } from './refs.js';

export const getUserDB = async (id: string) => {
  const users = await usersRefs.doc(id).get();

  return users;
};
export const getUserByEmail = async (email: string) => {
  const users = await usersRefs.where('email', '==', email).get();

  return users;
};
export const createUserDB = async (newUser: User) => {
  const ref = await usersRefs.add(newUser);

  return await usersRefs.doc(ref.id).get();
};
