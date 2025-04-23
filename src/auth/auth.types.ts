import { AccessType } from 'generated/prisma';

export interface IAuthJWTPayload {
  id: string;
  email: string;
  accessType: AccessType;
}
