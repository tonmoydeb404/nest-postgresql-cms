import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { ProfileRepository } from 'src/prisma/repository/profile.repository';
import { UpdateProfileBodyDto } from '../dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private repository: ProfileRepository) {}

  async findOneByUserId(userId: string) {
    const entity = await this.repository
      .model()
      .findUnique({ where: { userId } });

    if (!entity) {
      return this.repository.model().create({ data: { userId } });
    }

    return entity;
  }

  async updateOneByUserId(userId: string, body: UpdateProfileBodyDto) {
    const entity = await this.findOneByUserId(userId);

    return this.repository
      .model()
      .update({ where: { id: entity.id }, data: removeUndefined(body) });
  }
}
