import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { HashService } from 'src/common/services/hash.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(
    private prisma: PrismaService,
    private hashService: HashService,
  ) {}

  model() {
    return this.prisma.user;
  }

  async createWithHashPassword({ data, ...others }: Prisma.UserCreateArgs) {
    data.password = await this.hashService.hash(data.password);

    return this.prisma.user.create({ data, ...others });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      omit: { password: true },
    });
  }

  async findOneByEmailPassword(email: string, password: string) {
    const entity = await this.model().findUnique({ where: { email } });

    if (!entity) return null;

    const isMatched = await this.hashService.compare(password, entity.password);

    if (!isMatched) return null;

    const { password: _, ...user } = entity;

    return user;
  }
}
