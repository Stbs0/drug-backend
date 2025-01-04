import { NextFunction, Request, Response } from 'express';
import { FirebaseAppError } from 'firebase-admin/app';
import HttpException from './httpException.js';
import logger from './logger.js';

export const requestLogger = (request: Request, response: Response, next: NextFunction) => {
  logger.info(`Method:  ${request.method}`);
  logger.info(`Path:   ${request.path}`);
  logger.info(`Body:  `, request.body);

  next();
};

export const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandler = (error: unknown, req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof HttpException) {
    logger.error(error);
    res.status(error.errorCode).json(error);
    return;
  }
  if (error instanceof FirebaseAppError) {
    logger.error(error);
    res.status(500).json(error);

    return;
  }

  if (error instanceof Error) {
    logger.error(error.message);
    res.status(500).send({ error: error.message });
    return;
  }
  console.log(error);
  res.status(500).send(error);
};
