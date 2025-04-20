import { AccessType } from 'generated/prisma';

export interface IAuthJWTPayload {
  id: string;
  email: string;
  name: string;
  access_type: AccessType;
}
