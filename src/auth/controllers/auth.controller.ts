import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import cookieConfig from 'src/common/config/cookie.config';
import { authCookieKey } from '../auth.constant';
import { Public } from '../decorators/public.decorator';
import { User } from '../decorators/user.decorator';
import { LoginBodyDto } from '../dto/login.dto';
import { SignUpBodyDto } from '../dto/signup.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/login')
  async postLogin(
    @Body() body: LoginBodyDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const results = await this.authService.postLogin(body);

    response.cookie(authCookieKey, results.accessToken, cookieConfig());

    return {
      results: {
        accessToken: results.accessToken,
        user: results.user,
      },
    };
  }

  @Public()
  @Post('/signup')
  async postSignup(
    @Body() body: SignUpBodyDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const results = await this.authService.postSignup(body);

    response.cookie(authCookieKey, results.accessToken, cookieConfig());

    return {
      results: {
        accessToken: results.accessToken,
        user: results.user,
      },
    };
  }

  @Get('/refresh')
  async getRefresh(
    @User('email') email: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const results = await this.authService.getRefresh(email);

    response.cookie(authCookieKey, results.accessToken, cookieConfig());

    return {
      results: {
        accessToken: results.accessToken,
        user: results.user,
      },
    };
  }

  @Post('/logout')
  postLogout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie(authCookieKey);

    return {
      results: true,
    };
  }
}
