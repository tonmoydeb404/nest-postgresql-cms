import { Global, Module } from '@nestjs/common';
import { HashService } from 'src/common/services/hash.service';
import { PrismaService } from './prisma.service';
import { UserRolePermissionRepository } from './repository/user-role-permission.repository';
import { UserRoleRepository } from './repository/user-role.repository';
import { UserRepository } from './repository/user.repository';

const repositories = [
  UserRepository,
  UserRolePermissionRepository,
  UserRoleRepository,
];

@Global()
@Module({
  providers: [PrismaService, ...repositories, HashService],
  exports: [PrismaService, ...repositories],
})
export class PrismaModule {}
