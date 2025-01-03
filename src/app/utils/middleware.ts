import { NextFunction, Request, Response } from 'express';
import logger from './logger.js';
import HttpException from './httpException.js';
import { FirebaseAppError } from 'firebase-admin/app';

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
    logger.error(error.message);
    res.status(error.errorCode).send({ error: error.getError(), errorCode: error.errorCode });
  }
  if (error instanceof FirebaseAppError) {
    logger.error(error.message);
    res.status(500).send({ error: error.message, errorCode: error.cause });
  }

  if (error instanceof Error) {
    logger.error(error.message);
    res.status(500).send({ error: error.message });
  }
  console.log(error);
  res.send({ error });
};
