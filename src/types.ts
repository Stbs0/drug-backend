import { extraInfoUser, signInSchema } from 'utils/schemas.js';
import { Request } from 'express';
import { z } from 'zod';

export type NewUser = z.infer<typeof signInSchema>;

export type ExtraInfoUser = z.infer<typeof extraInfoUser>;

export type FullUser = ExtraInfoUser & NewUser;

export type RequestWithUser = Request & { user: FullUser };
