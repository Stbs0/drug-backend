import { Request, Response, NextFunction } from 'express';
import { createUserSchema } from './utils/schemas.js';
import { z } from 'zod';
type MiddlewareWithNext = {
  req: Request;
  res: Response;
  next: NextFunction;
};
type Middleware = Omit<MiddlewareWithNext, 'next'>;

type MiddlewareHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export { MiddlewareWithNext, Middleware, MiddlewareHandler };

export type User = z.infer<typeof createUserSchema>;
