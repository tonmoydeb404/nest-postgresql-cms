import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/prisma/repository/user.repository';
import { IAuthJWTPayload } from '../auth.types';
import { LoginBodyDto } from '../dto/login.dto';
import { SignUpBodyDto } from '../dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  private generateToken(payload: IAuthJWTPayload) {
    return this.jwtService.sign(payload);
  }

  async postLogin(body: LoginBodyDto) {
    const user = await this.userRepository.findOneByEmailPassword(
      body.email,
      body.password,
    );

    if (!user) {
      throw new UnauthorizedException('Email or password did not matched');
    }

    const accessToken = this.generateToken({
      email: user.email,
      name: user.name,
    });

    return { accessToken, user };
  }

  async postSignup(body: SignUpBodyDto) {
    const existingUser = await this.userRepository.findOneByEmail(body.email);

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.userRepository.create({ data: body });

    const accessToken = this.generateToken({
      email: user.email,
      name: user.name,
    });

    return { accessToken, user };
  }
}
