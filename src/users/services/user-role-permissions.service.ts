import { Injectable, NotFoundException } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { UserRolePermissionRepository } from 'src/prisma/repository/user/role-permission.repository';
import { CreateUserRolePermissionBodyDto } from '../dto/create-user-role-permission.dto';
import { UpdateUserRolePermissionBodyDto } from '../dto/update-user-role-permission.dto';

@Injectable()
export class UserRolePermissionsService {
  constructor(
    private userRolePermissionRepository: UserRolePermissionRepository,
  ) {}

  async findAllByRoleId(id: string) {
    return this.userRolePermissionRepository.getAllByRoleId(id);
  }

  async findAll() {
    return this.userRolePermissionRepository.model().findMany();
  }

  async findOneById(id: string) {
    const user = await this.userRolePermissionRepository.model().findUnique({
      where: { id },
      include: { role: true },
    });

    if (!user) throw new NotFoundException(`Role with ID ${id} not found`);
    return user;
  }

  async create(body: CreateUserRolePermissionBodyDto) {
    return this.userRolePermissionRepository.model().create({ data: body });
  }

  async updateById(id: string, body: UpdateUserRolePermissionBodyDto) {
    return this.userRolePermissionRepository
      .model()
      .update({ where: { id }, data: removeUndefined(body) });
  }

  async deleteById(id: string) {
    return this.userRolePermissionRepository.model().delete({ where: { id } });
  }
}
