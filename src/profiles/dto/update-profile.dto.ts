import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProfileBodyDto {
  @ApiProperty({ description: 'First Name' })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ description: 'Last Name' })
  @IsString()
  @IsOptional()
  lastName?: string;
}
