import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'generated/prisma';
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

  private generateToken(user: Omit<User, 'password'>) {
    const payload: IAuthJWTPayload = {
      email: user.email,
      name: user.name,
      id: user.id,
      access_type: user.access_type,
    };
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

    const accessToken = this.generateToken(user);

    return { accessToken, user };
  }

  async postSignup(body: SignUpBodyDto) {
    const existingUser = await this.userRepository.findOneByEmail(body.email);

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.userRepository.createWithHashPassword({
      data: body,
    });

    const accessToken = this.generateToken(user);

    return { accessToken, user };
  }

  async getRefresh(email: string) {
    const user = await this.userRepository.findOneByEmail(email);

    if (!user) {
      throw new BadRequestException('User already exists');
    }

    const accessToken = this.generateToken(user);

    return { accessToken, user };
  }
}
