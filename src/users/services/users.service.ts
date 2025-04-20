import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/prisma/repository/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(dto: CreateUserDto) {
    const entity = await this.userRepository.createWithHashPassword({
      data: dto,
    });

    const { password: _, ...user } = entity;

    return user;
  }

  async findAll() {
    return this.userRepository
      .model()
      .findMany({ select: { password: false } });
  }

  async findOne(id: string) {
    const user = await this.userRepository.model().findUnique({
      where: { id },
      omit: { password: true },
    });

    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findOne(id);

    return this.userRepository.model().update({
      where: { id },
      data: dto,
    });
  }
}
