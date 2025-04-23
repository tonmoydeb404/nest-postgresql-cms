import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from 'src/prisma/repository/user/index.repository';
import { authCookieKey } from '../auth.constant';
import { IAuthJWTPayload } from '../auth.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req: Request) => {
          if (req && req.signedCookies && authCookieKey in req.signedCookies) {
            return req.signedCookies[authCookieKey] as string;
          }
          return null;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.secret') as string,
    });
  }

  async validate(payload: IAuthJWTPayload): Promise<IAuthJWTPayload> {
    const entity = await this.userRepository.findOneByEmail(payload.email);

    if (!entity) {
      throw new ForbiddenException('Failed to validate authentication details');
    }

    return {
      email: entity.email,
      id: entity.id,
      accessType: entity.accessType,
    };
  }
}
