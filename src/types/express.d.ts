import { FullUser, NewUserType } from '@/app/routes/user/user.types.ts';

declare global {
  namespace Express {
    interface Request {
      user?: FullUser | NewUserType;
    }
  }
}

export {};
