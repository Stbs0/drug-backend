import { completeProfileSchema, createUserSchema } from './user-request.schema.js';
import HttpException from '@/app/httpException.js';
import db from '@/app/config/firebase.js';

export const createUser = async (newUserPayload: unknown, uid: string) => {
  const parsedBody = createUserSchema.safeParse(newUserPayload);

  if (!parsedBody.success) {
    throw new HttpException(400, parsedBody.error.message);
  }

  const { email, displayName, photoURL, phoneNumber, providerId } = parsedBody.data;

  const userRef = db.collection('users').doc(uid);

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

  console.log(userDoc);

  return userDoc;
};

export const getUser = async (uid: string) => {
  const userDoc = await db.collection('users').doc(uid).get();

  if (!userDoc.exists) {
    throw new HttpException(404, 'User not found');
  }
  return userDoc;
};

export const completeProfile = async (completeProfilePayload: unknown, uid: string) => {
  const parsedBody = completeProfileSchema.safeParse(completeProfilePayload);

  if (!parsedBody.success) {
    throw new HttpException(400, parsedBody.error.message);
  }

  const { age, phoneNumber, university, occupation } = parsedBody.data;

  const userRef = db.collection('users').doc(uid);
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
