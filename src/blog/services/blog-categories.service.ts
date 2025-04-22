import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { BlogCategoryRepository } from 'src/prisma/repository/blog/category.repository';
import { CreateBlogCategoryBodyDto } from '../dto/create-blog-category.dto';
import { UpdateBlogCategoryBodyDto } from '../dto/update-blog-category.dto';

@Injectable()
export class BlogCategoriesService {
  constructor(private repository: BlogCategoryRepository) {}

  async create(body: CreateBlogCategoryBodyDto) {
    return this.repository.model().create({
      data: body,
    });
  }

  async findAll() {
    return this.repository.model().findMany();
  }

  async findOneById(id: string) {
    return this.repository.model().findUnique({
      where: { id },
    });
  }

  async updateById(id: string, body: UpdateBlogCategoryBodyDto) {
    return this.repository.model().update({
      where: { id },
      data: removeUndefined(body),
    });
  }

  async deleteById(id: string) {
    return this.repository.model().delete({
      where: { id },
    });
  }
}
