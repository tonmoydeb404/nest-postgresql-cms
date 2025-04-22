import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { BlogReactionRepository } from 'src/prisma/repository/blog/reaction.repository';
import { CreateBlogReactionBodyDto } from '../dto/create-blog-reaction.dto';
import { UpdateBlogReactionBodyDto } from '../dto/update-blog-reaction.dto';

@Injectable()
export class BlogReactionsService {
  constructor(private repository: BlogReactionRepository) {}

  async upsert(body: CreateBlogReactionBodyDto) {
    const { articleId, type, userId } = body;

    return this.repository.model().upsert({
      where: { userId_articleId: { userId, articleId } },
      create: { ...body, userId, articleId },
      update: { type },
    });
  }

  async create(body: CreateBlogReactionBodyDto) {
    const { articleId, type, userId } = body;

    return this.repository.model().create({
      data: { type, articleId, userId },
    });
  }

  async findAll() {
    return this.repository.model().findMany({});
  }

  async findOneById(id: string) {
    return this.repository.model().findUnique({
      where: { id },
    });
  }

  async updateById(id: string, body: UpdateBlogReactionBodyDto) {
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
