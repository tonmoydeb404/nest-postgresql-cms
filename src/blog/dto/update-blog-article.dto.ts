import { PartialType } from '@nestjs/swagger';
import { CreateBlogArticleBodyDto } from './create-blog-article.dto';

export class UpdateBlogArticleBodyDto extends PartialType(
  CreateBlogArticleBodyDto,
) {}
