import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserRolePermissionBodyDto } from '../dto/create-user-role-permission.dto';
import { UpdateUserRolePermissionBodyDto } from '../dto/update-user-role-permission.dto';
import { UserRolePermissionsService } from '../services/user-role-permissions.service';

@ApiTags('User Role Permissions')
@Controller('/user-role-permissions')
export class UserRolePermissionsController {
  constructor(private userRolePermissionsService: UserRolePermissionsService) {}

  @Get()
  findAll() {
    return this.userRolePermissionsService.findAll();
  }

  @Post()
  create(@Body() body: CreateUserRolePermissionBodyDto) {
    return this.userRolePermissionsService.create(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRolePermissionsService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateUserRolePermissionBodyDto,
  ) {
    return this.userRolePermissionsService.updateById(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userRolePermissionsService.deleteById(id);
  }
}
