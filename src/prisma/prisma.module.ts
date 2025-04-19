import { Global, Module } from '@nestjs/common';
import { HashService } from 'src/common/services/hash.service';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repository/user.repository';

@Global()
@Module({
  providers: [PrismaService, UserRepository, HashService],
  exports: [PrismaService, UserRepository],
})
export class PrismaModule {}
