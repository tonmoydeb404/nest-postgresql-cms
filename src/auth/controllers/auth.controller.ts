import { Body, Controller, Post } from '@nestjs/common';
import { LoginBodyDto } from '../dto/login.dto';
import { SignUpBodyDto } from '../dto/signup.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async postLogin(@Body() body: LoginBodyDto) {
    const response = await this.authService.postLogin(body);

    return {
      results: {
        accessToken: response.accessToken,
        user: response.user,
      },
    };
  }

  @Post('/signup')
  async postSignup(@Body() body: SignUpBodyDto) {
    const response = await this.authService.postSignup(body);

    return {
      results: {
        accessToken: response.accessToken,
        user: response.user,
      },
    };
  }
}
