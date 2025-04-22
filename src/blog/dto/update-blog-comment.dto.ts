import { PartialType } from '@nestjs/swagger';
import { CreateBlogCommentBodyDto } from './create-blog-comment.dto';

export class UpdateBlogCommentBodyDto extends PartialType(
  CreateBlogCommentBodyDto,
) {}
