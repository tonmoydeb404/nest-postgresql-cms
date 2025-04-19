import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { IAuthJWTPayload } from '../auth.types';

export const User = createParamDecorator(
  (property: keyof IAuthJWTPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    const user = request.user;

    if (!user) {
      return null;
    }

    if (property) {
      return user[property];
    }

    return user;
  },
);
