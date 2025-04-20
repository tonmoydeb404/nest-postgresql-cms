import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRolesService } from '../services/user-roles.service';

@ApiTags('User Roles')
@Controller('/user-roles')
export class UserRolesController {
  constructor(private usersRolesService: UserRolesService) {}

  @Get()
  findAll() {
    return this.usersRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersRolesService.findOne(id);
  }
}
