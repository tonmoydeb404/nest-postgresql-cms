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
import { AccessType } from 'generated/prisma';
import { ACCESS_TYPES_KEY } from '../decorators/access-type.decorator';

@Injectable()
export class AccessTypeGuard implements CanActivate {
  logger = new Logger(AccessTypeGuard.name);
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const accessTypes = this.reflector.getAllAndOverride<AccessType[]>(
      ACCESS_TYPES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!accessTypes || accessTypes.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();

    if (!request.user) {
      throw new UnauthorizedException('User account not found in request');
    }

    if (!accessTypes.includes(request.user.accessType)) {
      throw new ForbiddenException(
        'Any of this [' + accessTypes.join(', ') + '] Access required',
      );
    }

    return true;
  }
}
