import { Body, Controller, Get, Patch } from '@nestjs/common';
import { User } from 'src/auth/decorators/user.decorator';
import { UpdateProfileBodyDto } from '../dto/update-profile.dto';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private service: ProfileService) {}

  @Get('/')
  getOwn(@User('id') id: string) {
    return this.service.findOneByUserId(id);
  }

  @Patch('/')
  updateProfile(@User('id') id: string, @Body() body: UpdateProfileBodyDto) {
    return this.service.updateOneByUserId(id, body);
  }
}
