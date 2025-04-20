import { IAuthJWTPayload } from 'src/auth/auth.types';

declare global {
  namespace Express {
    interface User extends IAuthJWTPayload {
      id: string;
    }
  }
}
