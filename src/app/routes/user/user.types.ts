import { z } from 'zod';
import { completeProfileSchema, createUserSchema, updateUserSchema } from './user-request.schema.js';

export type NewUserType = z.infer<typeof createUserSchema>;

export type CompleteProfileType = z.infer<typeof completeProfileSchema>;

export type FullUser = CompleteProfileType & NewUserType;
export type UpdateUserType = z.infer<typeof updateUserSchema>;
