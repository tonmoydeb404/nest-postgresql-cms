import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { BlogCommentRepository } from 'src/prisma/repository/blog/comment.repository';
import { CreateBlogCommentBodyDto } from '../dto/create-blog-comment.dto';
import { UpdateBlogCommentBodyDto } from '../dto/update-blog-comment.dto';

@Injectable()
export class BlogCommentsService {
  constructor(private repository: BlogCommentRepository) {}

  async create(body: CreateBlogCommentBodyDto) {
    return this.repository.model().create({
      data: body,
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

  async updateById(id: string, body: UpdateBlogCommentBodyDto) {
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
