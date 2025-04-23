import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserPasswordBodyDto {
  @ApiProperty({ description: 'Current Password' })
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty({ description: 'New Password' })
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
