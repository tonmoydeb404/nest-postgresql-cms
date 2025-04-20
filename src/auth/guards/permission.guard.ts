import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { UserRolePermission } from 'generated/prisma';
import { UserRepository } from 'src/prisma/repository/user.repository';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

@Injectable()
export class PermissionGuard implements CanActivate {
  logger = new Logger(PermissionGuard.name);
  constructor(
    private reflector: Reflector,
    private userRepository: UserRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permissions = this.reflector.getAllAndOverride<UserRolePermission[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!permissions || permissions.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();

    if (!request.user) {
      throw new UnauthorizedException('User account not found in request');
    }

    try {
      const roles = await this.userRepository.findRoles(request.user.id);

      for (const permission of permissions) {
        const matchingRoles = roles.filter((role) =>
          role.permissions.some((p) => p.name === permission.name),
        );

        if (matchingRoles.length === 0) {
          throw new ForbiddenException('User lacks required permission');
        }

        const hasAction = matchingRoles.some((role) =>
          role.permissions.some(
            (p) =>
              p.name === permission.name &&
              permission.actions.every((action) => p.actions.includes(action)),
          ),
        );

        if (!hasAction) {
          throw new ForbiddenException(
            'User lacks required action(s) on this permission',
          );
        }
      }

      return true;
    } catch (error: any) {
      this.logger.error(error?.message, error?.stack, error?.context);
      throw new ForbiddenException(error?.message || 'Access denied');
    }
  }
}
