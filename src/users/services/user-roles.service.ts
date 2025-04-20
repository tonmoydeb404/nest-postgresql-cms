import { Injectable, NotFoundException } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { UserRoleRepository } from 'src/prisma/repository/user-role.repository';
import { CreateUserRoleBodyDto } from '../dto/create-user-role.dto';
import { UpdateUserRoleBodyDto } from '../dto/update-user-role.dto';

@Injectable()
export class UserRolesService {
  constructor(private userRoleRepository: UserRoleRepository) {}

  async findAll() {
    return this.userRoleRepository.model().findMany({});
  }

  async findOneById(id: string) {
    const user = await this.userRoleRepository.model().findUnique({
      where: { id },
      include: { permissions: true },
    });

    if (!user) throw new NotFoundException(`Role with ID ${id} not found`);
    return user;
  }

  async create(body: CreateUserRoleBodyDto) {
    return this.userRoleRepository.model().create({ data: body });
  }

  async updateById(id: string, body: UpdateUserRoleBodyDto) {
    return this.userRoleRepository
      .model()
      .update({ where: { id }, data: removeUndefined(body) });
  }

  async deleteById(id: string) {
    return this.userRoleRepository.model().delete({ where: { id } });
  }
}
