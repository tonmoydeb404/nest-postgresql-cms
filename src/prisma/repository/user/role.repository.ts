import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRoleRepository {
  constructor(private prisma: PrismaService) {}

  model() {
    return this.prisma.userRole;
  }
}
