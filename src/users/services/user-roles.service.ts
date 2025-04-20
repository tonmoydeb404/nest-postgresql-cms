import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRoleRepository } from 'src/prisma/repository/user-role.repository';

@Injectable()
export class UserRolesService {
  constructor(private userRoleRepository: UserRoleRepository) {}

  async findAll() {
    return this.userRoleRepository.model().findMany({});
  }

  async findOne(id: string) {
    const user = await this.userRoleRepository.model().findUnique({
      where: { id },
      include: { permissions: true },
    });

    if (!user) throw new NotFoundException(`Role with ID ${id} not found`);
    return user;
  }
}
