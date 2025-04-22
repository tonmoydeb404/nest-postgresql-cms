import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogReactionRepository {
  constructor(private prisma: PrismaService) {}

  model() {
    return this.prisma.blogReaction;
  }
}
