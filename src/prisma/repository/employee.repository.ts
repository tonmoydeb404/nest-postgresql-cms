import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import slugify from 'slugify';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeRepository {
  constructor(private prisma: PrismaService) {}

  model() {
    return this.prisma.employee;
  }

  private async generateUniqueSlug(firstName: string, lastName: string) {
    const baseSlug = slugify(`${firstName} ${lastName}`, { lower: true });
    let slug = baseSlug;
    let counter = 1;

    while (await this.model().findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter++}`;
    }

    return slug;
  }

  async createWithSlugify({
    data,
    ...others
  }: Omit<Prisma.EmployeeCreateArgs, 'data'> & {
    data: Omit<Prisma.EmployeeCreateInput, 'slug'> & { slug?: string };
  }) {
    let slug = data.slug;

    if (!slug) {
      slug = await this.generateUniqueSlug(data.firstName, data.lastName);
    }

    return this.model().create({ ...others, data: { ...data, slug } });
  }
}
