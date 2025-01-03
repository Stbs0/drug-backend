import { auth } from '@/app/config/firebase.js';
import HttpException from '@/app/utils/httpException.js';
import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getToken } from './token.utils.js';
import { getUser } from './user.controller.js';
import { FullUser, NewUserType } from './user.types.js';

export const authMiddleware = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    throw new HttpException(401, 'Unauthorized');
  }
  const token = getToken(req.headers.authorization);
  if (!token) {
    throw new HttpException(401, 'Unauthorized');
  }

  const decodedToken = await auth.verifyIdToken(token);

  if (!decodedToken) {
    throw new HttpException(401, 'Unauthorized');
  }
  const user = await getUser(decodedToken.uid);
  if (user) {
    req.user = user as FullUser | NewUserType;
  }
  next();
});
