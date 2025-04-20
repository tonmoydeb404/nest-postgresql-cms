import { SetMetadata } from '@nestjs/common';
import { UserRolePermission } from 'generated/prisma';

export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (permissions: UserRolePermission[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
