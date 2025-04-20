import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateEmployeeBodyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: '1990-01-01T00:00:00.000Z' })
  @IsDateString()
  dob: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
