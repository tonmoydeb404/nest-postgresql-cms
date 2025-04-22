import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ContentStage } from 'generated/prisma';

export class CreateServiceBodyDto {
  @ApiProperty({ example: 'Web Development' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'We offer modern and scalable web app development.' })
  @IsString()
  description: string;

  @ApiProperty({
    example: '<p>Here’s a detailed description of our service...</p>',
  })
  @IsString()
  content: string;

  @ApiPropertyOptional({ enum: ContentStage, default: ContentStage.DRAFT })
  @IsOptional()
  @IsEnum(ContentStage)
  stage?: ContentStage;
}
