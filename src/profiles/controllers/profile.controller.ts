import {
  Body,
  Controller,
  Get,
  Patch,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
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

  @Put('/avatar')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Single file upload',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  updateAvatar(
    @User('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.service.updateAvatarByUserId(id, file);
  }
}
