import db from '@/app/config/firebase.js';
import HttpException from '@/app/utils/httpException.js';
import { CompleteProfileType, NewUserType, UpdateUserType } from './user.types.js';
const userCollection = db.collection('users');
export const createUser = async (newUserPayload: NewUserType, uid: string) => {
  const { email, displayName, photoURL, phoneNumber, providerId } = newUserPayload;

  const userRef = userCollection.doc(uid);

  await userRef.set({
    email,
    uid,
    displayName,
    photoURL,
    phoneNumber,
    providerId,
    profileComplete: false,
  });

  const userDoc = await userRef.get();

  return userDoc;
};

export const getUser = async (uid: string) => {
  const userDoc = await userCollection.doc(uid).get();
  const user = userDoc.data();
  if (!user) {
    throw new HttpException(404, 'User not found');
  }
  return user;
};

export const completeProfile = async (completeProfilePayload: CompleteProfileType, uid: string) => {
  const { age, phoneNumber, university, occupation } = completeProfilePayload;

  const userRef = userCollection.doc(uid);
  await userRef.update({
    age,
    phoneNumber,
    university,
    occupation,
    profileComplete: true,
  });

  const userDoc = await userRef.get();

  return userDoc;
};
export const updateUser = async (uid: string, payload: UpdateUserType) => {
  const userRef = userCollection.doc(uid);

  await userRef.update({ ...payload });
};
