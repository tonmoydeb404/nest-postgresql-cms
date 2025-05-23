import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/prisma/repository/user/index.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserPasswordBodyDto } from '../dto/update-user-password.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(dto: CreateUserDto) {
    const entity = await this.userRepository.createWithHashPassword({
      data: dto,
      omit: { password: true },
    });

    return entity;
  }

  async findAll() {
    return this.userRepository.model().findMany({ omit: { password: true } });
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

  async updatePassword(email: string, dto: UpdateUserPasswordBodyDto) {
    const user = await this.userRepository.findOneByEmailPassword(
      email,
      dto.currentPassword,
    );

    if (!user) {
      throw new BadRequestException('Password did not matched');
    }

    return this.userRepository.updateWithHashPassword({
      where: { id: user.id },
      data: { password: dto.newPassword },
    });
  }
}
