import { Module } from '@nestjs/common';
import { UserRolePermissionsController } from './controllers/user-role-permissions.controller';
import { UserRolesController } from './controllers/user-roles.controller';
import { UserController } from './controllers/user.controller';
import { UsersController } from './controllers/users.controller';
import { UserRolePermissionsService } from './services/user-role-permissions.service';
import { UserRolesService } from './services/user-roles.service';
import { UsersService } from './services/users.service';

@Module({
  controllers: [
    UserController,
    UsersController,
    UserRolesController,
    UserRolePermissionsController,
  ],
  providers: [UsersService, UserRolesService, UserRolePermissionsService],
  exports: [UsersService],
})
export class UsersModule {}
