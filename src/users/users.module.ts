import { Module } from '@nestjs/common';
import { UserRolesController } from './controllers/user-roles.controller';
import { UsersController } from './controllers/users.controller';
import { UserRolesService } from './services/user-roles.service';
import { UsersService } from './services/users.service';

@Module({
  controllers: [UsersController, UserRolesController],
  providers: [UsersService, UserRolesService],
  exports: [UsersService],
})
export class UsersModule {}
