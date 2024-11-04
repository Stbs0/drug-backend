import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3, 'must be more than 4 characters'),
  password: z.string().min(6, 'must be more than 6 characters'),
  conformPassword: z.string().min(6, 'must be more than 6 characters'),
});
