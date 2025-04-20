import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRolePermissionRepository {
  constructor(private prisma: PrismaService) {}

  model() {
    return this.prisma.userRolePermission;
  }

  getAllByRoleId(id: string, args?: Prisma.UserRolePermissionFindManyArgs) {
    return this.model().findMany({
      ...args,
      where: { ...args?.where, roleId: id },
    });
  }
}
