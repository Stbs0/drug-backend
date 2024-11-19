import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import logger from './logger.js';
import { getToken } from './utils.js';
import asyncHandler from 'express-async-handler';
import { verifyIdToken } from './verifyToken.js';
import db from 'config/firebase.js';
import { FullUser, NewUser } from 'types.js';

export const requestLogger = (request: Request, response: Response, next: NextFunction) => {
  logger.info(`Method:  ${request.method}`);
  logger.info(`Path:   ${request.path}`);
  logger.info(`Body:  `, request.body);

  next();
};

export const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandler = (error: ErrorRequestHandler, req: Request, res: Response, _next: NextFunction) => {
  if ('message' in error) {
    logger.error(error.message);
  }

  res.send({ error });
};

export const authMiddleware = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    throw new Error('Unauthorized');
  }
  const token = getToken(req.headers.authorization);
  if (!token) {
    throw new Error('Unauthorized');
  }

  const decodedToken = await verifyIdToken(token);
  if (!decodedToken) {
    throw new Error('Unauthorized');
  }

  const userDoc = await db.collection('users').doc(decodedToken.uid).get();

  if (!userDoc.exists) {
    throw new Error('Unauthorized');
  }
  const user = userDoc.data() as FullUser | NewUser;
  req.user = user;
  next();
});
