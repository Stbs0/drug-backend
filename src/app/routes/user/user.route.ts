import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { authMiddleware } from './auth.middleware.js';
import { completeProfile, createUser, getUser } from './user.controller.js';
const userRoute = Router();

userRoute.get(
  '',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const userDoc = await getUser(req.user!.uid!);
    res.json(userDoc.data());
  })
);

userRoute.post(
  '/complete-profile',
  authMiddleware,
  asyncHandler(async (req, res) => {
    // TODO: add ts-ignore
    const userDoc = await completeProfile(req.body, req.user!.uid!);
    res.status(201).json(userDoc);
  })
);

userRoute.post(
  '/create',
  authMiddleware,
  asyncHandler(async (req, res) => {
    // TODO: add ts-ignore
    const userDoc = await createUser(req.body, req.user!.uid!);

    console.log(userDoc);

    res.status(201).json(userDoc);
  })
);

export default userRoute;
