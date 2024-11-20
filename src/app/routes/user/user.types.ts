import { Request } from 'express';
import { z } from 'zod';
import { completeProfileSchema, createUserSchema } from './user-request.schema.js';

export type NewUserType = z.infer<typeof createUserSchema>;

export type CompleteProfileType = z.infer<typeof completeProfileSchema>;

export type FullUser = CompleteProfileType & NewUserType;

export type RequestWithUser = Request & { user: FullUser };
