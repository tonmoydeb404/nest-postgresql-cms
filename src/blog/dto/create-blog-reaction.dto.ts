import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ReactionType } from 'generated/prisma';

export class CreateBlogReactionBodyDto {
  @ApiProperty({ example: 'article-id-uuid' })
  @IsString()
  articleId: string;

  @ApiProperty({ example: 'user-id-uuid' })
  @IsString()
  userId: string;

  @ApiProperty({ enum: ReactionType })
  @IsEnum(ReactionType)
  type: ReactionType;
}
