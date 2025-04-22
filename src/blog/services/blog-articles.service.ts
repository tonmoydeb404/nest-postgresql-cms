import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { BlogArticleRepository } from 'src/prisma/repository/blog/article.repository';
import { CreateBlogArticleBodyDto } from '../dto/create-blog-article.dto';
import { UpdateBlogArticleBodyDto } from '../dto/update-blog-article.dto';

@Injectable()
export class BlogArticlesService {
  constructor(private repository: BlogArticleRepository) {}

  async create(body: CreateBlogArticleBodyDto) {
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

  async updateById(id: string, body: UpdateBlogArticleBodyDto) {
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
