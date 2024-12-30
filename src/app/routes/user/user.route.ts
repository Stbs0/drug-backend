import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { authMiddleware } from './auth.middleware.js';
import { completeProfile, createUser, getUser } from './user.controller.js';
const userRoute = Router();

userRoute.get(
  '/me',
  authMiddleware,

  asyncHandler(async (req, res) => {
    if (!req.user) throw new Error('User not found');

    const user = await getUser(req.user.uid!);

    res.json(user);
  })
);

userRoute.post(
  '/complete-profile',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const userDoc = await completeProfile(req.body, req.user!.uid!);
    res.status(201).json(userDoc);
  })
);

userRoute.post(
  '/create',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const userDoc = await createUser(req.body, req.user!.uid!);

    console.log(userDoc);

    res.status(201).json(userDoc);
  })
);

export default userRoute;
