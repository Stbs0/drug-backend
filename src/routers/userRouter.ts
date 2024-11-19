import db from 'config/firebase.js';
import express from 'express';
import asyncHandler from 'express-async-handler';
import { authMiddleware } from 'utils/middleware.js';
import { signInSchema } from 'utils/schemas.js';
import { getToken } from 'utils/utils.js';
import { verifyIdToken } from 'utils/verifyToken.js';

const userRouter = express.Router();
// TODO look for auth and naming the apis
userRouter.get(
  '/',
  authMiddleware,
  asyncHandler(async (req, res) => {
    if (!req.headers.authorization) {
      throw new Error('Unauthorized');
    }
    console.log('sss', req.headers.authorization);
    const token = getToken(req.headers.authorization);
    console.log(token);
    if (!token) {
      throw new Error('Unauthorized');
    }

    const decodedToken = await verifyIdToken(token);
    console.log(decodedToken);
    if (!decodedToken) {
      throw new Error('Unauthorized');
    }

    const userDoc = await db.collection('users').doc(decodedToken.uid).get();

    if (!userDoc.exists) {
      throw new Error('Unauthorized');
    } else {
      res.json(userDoc.data());
    }
  }),
);

userRouter.post(
  '/',
  authMiddleware,
  asyncHandler(async (req, res) => {
    if (!req.headers.authorization) {
      throw new Error('Unauthorized');
    }
    const parsedBody = signInSchema.safeParse(req.body);

    if (!parsedBody.success) {
      throw new Error(parsedBody.error.message);
    }

    const token = getToken(req.headers.authorization);

    if (!token) {
      throw new Error('Unauthorized');
    }
    const decodedToken = await verifyIdToken(token);

    const userDoc = await db.collection('users').doc(decodedToken.uid).get();

    if (!userDoc.exists) {
      const { email, uid, displayName, photoURL, phoneNumber, providerId } = parsedBody.data;
      await userDoc.ref.set({
        email: email,
        uid: uid,
        displayName: displayName,
        photoURL: photoURL,
        phoneNumber: phoneNumber,
        providerId: providerId,
        profileComplete: false,
      });
    }
    res.status(200).send();
  }),
);

export default userRouter;
