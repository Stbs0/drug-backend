import { NextFunction, Request, Response } from 'express';
export declare const requestLogger: (request: Request, response: Response, next: NextFunction) => void;
export declare const unknownEndpoint: (_request: any, response: Response) => void;
