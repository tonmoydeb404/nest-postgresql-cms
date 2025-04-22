import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ContentStage } from 'generated/prisma';

export class CreateCustomerReviewBodyDto {
  @ApiProperty({
    description: 'Name of the author',
    example: 'John Doe',
  })
  @IsString()
  authorName: string;

  @ApiProperty({
    description: 'Position of the author',
    example: 'CEO',
  })
  @IsString()
  authorPosition: string;

  @ApiProperty({
    description: 'Company of the author',
    example: 'TechCorp',
  })
  @IsString()
  authorCompany: string;

  @ApiProperty({
    description: 'Content of the review',
    example: 'Great service and excellent support!',
  })
  @IsString()
  content: string;

  @ApiPropertyOptional({
    description: 'Current stage of the content',
    enum: ContentStage,
    default: ContentStage.DRAFT,
  })
  @IsEnum(ContentStage)
  @IsOptional()
  stage?: ContentStage;
}
