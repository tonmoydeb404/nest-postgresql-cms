import { Body, Controller, Get, Put } from '@nestjs/common';
import { User } from 'src/auth/decorators/user.decorator';
import { UpdateUserPasswordBodyDto } from '../dto/update-user-password.dto';
import { UsersService } from '../services/users.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getOwn(@User('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put('/password')
  updatePassword(
    @User('email') email: string,
    @Body() body: UpdateUserPasswordBodyDto,
  ) {
    return this.usersService.updatePassword(email, body);
  }
}
