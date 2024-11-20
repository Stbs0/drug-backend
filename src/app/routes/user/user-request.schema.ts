import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  providerId: z.string().optional(),
  phoneNumber: z.string().nullable(),
  photoURL: z.string().nullable(),
  displayName: z.string().nullable(),
  uid: z.string().nullable(),
});

export const completeProfileSchema = z.object({
  age: z.string(),
  phoneNumber: z.string(),
  university: z.string(),
  occupation: z.string(),
});
