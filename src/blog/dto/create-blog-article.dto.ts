import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ContentStage } from 'generated/prisma';

export class CreateBlogArticleBodyDto {
  @ApiProperty({ example: 'Understanding NestJS Modules' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'understanding-nestjs-modules' })
  @IsString()
  slug: string;

  @ApiProperty({
    example: 'Learn how to use modules in NestJS to organize code.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: '<p>This is the full HTML content of the article...</p>',
  })
  @IsString()
  content: string;

  @ApiProperty({ enum: ContentStage, default: ContentStage.DRAFT })
  @IsEnum(ContentStage)
  stage: ContentStage;

  @ApiProperty({ example: 'a6d2f3a5-1234-5678-90ab-cdef12345678' })
  @IsString()
  categoryId: string;
}
