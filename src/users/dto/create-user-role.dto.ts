import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserRoleBodyDto {
  @ApiProperty({ description: 'Name of the role', example: 'admin' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Description of the role',
    example: 'Administrator with full access',
  })
  @IsString()
  @IsOptional()
  description?: string;
}
