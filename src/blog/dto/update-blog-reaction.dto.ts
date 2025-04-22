import { PartialType } from '@nestjs/swagger';
import { CreateBlogReactionBodyDto } from './create-blog-reaction.dto';

export class UpdateBlogReactionBodyDto extends PartialType(
  CreateBlogReactionBodyDto,
) {}
