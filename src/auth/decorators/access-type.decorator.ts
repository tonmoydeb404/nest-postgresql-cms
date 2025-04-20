import { SetMetadata } from '@nestjs/common';
import { AccessType } from 'generated/prisma';

export const ACCESS_TYPES_KEY = 'access_types';
export const AccessTypes = (accessTypes: AccessType[]) =>
  SetMetadata(ACCESS_TYPES_KEY, accessTypes);
export const AdminAccess = () => AccessTypes([AccessType.ADMIN]);
export const UserAccess = () => AccessTypes([AccessType.USER]);
