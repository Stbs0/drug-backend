import { Request, Response, NextFunction } from 'express';
type MiddlewareWithNext = {
    req: Request;
    res: Response;
    next: NextFunction;
};
type Middleware = Omit<MiddlewareWithNext, 'next'>;
type MiddlewareHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;
export { MiddlewareWithNext, Middleware, MiddlewareHandler };
