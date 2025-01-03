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

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
  providerId: z.string().optional(),
  phoneNumber: z.string().optional(),
  photoURL: z.string().optional(),
  name: z.string().optional(),
  uid: z.string().optional(),
  age: z.string().optional(),
  university: z.string().optional(),
  occupation: z.string().optional(),
});
