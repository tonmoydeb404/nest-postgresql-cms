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
import { CreateUserRoleBodyDto } from '../dto/create-user-role.dto';
import { UpdateUserRoleBodyDto } from '../dto/update-user-role.dto';
import { UserRolesService } from '../services/user-roles.service';

@ApiTags('User Roles')
@Controller('/user-roles')
export class UserRolesController {
  constructor(private usersRolesService: UserRolesService) {}

  @Get()
  findAll() {
    return this.usersRolesService.findAll();
  }

  @Post()
  create(@Body() body: CreateUserRoleBodyDto) {
    return this.usersRolesService.create(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersRolesService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserRoleBodyDto) {
    return this.usersRolesService.updateById(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersRolesService.deleteById(id);
  }
}
