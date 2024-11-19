import { FullUser, NewUser } from 'types.ts';

declare global {
  namespace Express {
    interface Request {
      user?: FullUser | NewUser; // Add user to the Request interface
    }
  }
}
