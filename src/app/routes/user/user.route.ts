import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import HttpException from '@/app/utils/httpException.js';
import { authMiddleware } from './auth.middleware.js';
import { completeProfileSchema, createUserSchema, updateUserSchema } from './user-request.schema.js';
import { completeProfile, createUser, getUser, updateUser } from './user.controller.js';
const userRoute = Router();

userRoute.get(
  '/me',
  authMiddleware,

  asyncHandler((req, res) => {
    if (!req.user) throw new Error('User not found');
    res.json(req.user);
  })
);

userRoute.post(
  '/complete-profile',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const parsedBody = completeProfileSchema.safeParse(req.body);
    if (!parsedBody.success) {
      throw new HttpException(400, parsedBody.error.message);
    }
    const userDoc = await completeProfile(parsedBody.data, req.user!.uid!);
    res.status(201).json(userDoc);
  })
);

userRoute.post(
  '/create',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const parsedBody = createUserSchema.safeParse(req.body);
    if (!parsedBody.success) {
      throw new HttpException(400, parsedBody.error.message);
    }
    const userDoc = await createUser(parsedBody.data, req.user!.uid!);

    res.status(201).json(userDoc);
  })
);
userRoute.post(
  '/update',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const parsedBody = updateUserSchema.safeParse(req.body);
    if (!parsedBody.success) {
      throw new HttpException(400, parsedBody.error.message);
    }
    await updateUser(req.user!.uid!, parsedBody.data);
    const userDoc = await getUser(req.user!.uid!);
    res.status(201).json(userDoc);
  })
);

export default userRoute;
