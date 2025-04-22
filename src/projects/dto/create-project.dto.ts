import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ContentStage } from 'generated/prisma';

export class CreateProjectBodyDto {
  @ApiProperty({ example: 'AI Portfolio Builder' })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'A web app that helps users generate a portfolio using AI',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: '<p>This is the full content of the project...</p>' })
  @IsString()
  content: string;

  @ApiPropertyOptional({ enum: ContentStage, default: ContentStage.DRAFT })
  @IsOptional()
  @IsEnum(ContentStage)
  stage?: ContentStage;
}
