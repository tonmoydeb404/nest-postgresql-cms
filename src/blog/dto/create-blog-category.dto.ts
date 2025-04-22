import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBlogCategoryBodyDto {
  @ApiProperty({ example: 'Backend' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'backend' })
  @IsString()
  slug: string;

  @ApiProperty({ example: 'Articles related to server-side development' })
  @IsString()
  description: string;
}
