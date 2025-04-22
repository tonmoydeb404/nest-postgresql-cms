import { PartialType } from '@nestjs/swagger';
import { CreateBlogCategoryBodyDto } from './create-blog-category.dto';

export class UpdateBlogCategoryBodyDto extends PartialType(
  CreateBlogCategoryBodyDto,
) {}
