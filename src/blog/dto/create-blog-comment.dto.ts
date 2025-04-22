import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBlogCommentBodyDto {
  @ApiProperty({ example: 'Great article!' })
  @IsString()
  content: string;

  @ApiProperty({ example: 'article-id-uuid' })
  @IsString()
  articleId: string;

  @ApiProperty({ example: 'user-id-uuid' })
  @IsString()
  userId: string;
}
