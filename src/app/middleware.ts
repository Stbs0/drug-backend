import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
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

export const errorHandler = (error: ErrorRequestHandler, req: Request, res: Response, _next: NextFunction) => {
  if ('message' in error) {
    logger.error(error.message);
  }

  res.send({ error });
};
