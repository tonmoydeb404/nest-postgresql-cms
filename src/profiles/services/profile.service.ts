import { Injectable } from '@nestjs/common';
import { AssetsService } from 'src/assets/services/assets.service';
import { removeUndefined } from 'src/common/utils/object';
import { ProfileRepository } from 'src/prisma/repository/profile.repository';
import { UpdateProfileBodyDto } from '../dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    private repository: ProfileRepository,
    private assetsService: AssetsService,
  ) {}

  async findOneByUserId(userId: string) {
    const response = await this.repository.findOneWithAsset(
      { where: { userId } },
      ['avatarId'],
    );

    if (!response.entity) {
      response.entity = await this.repository
        .model()
        .create({ data: { userId } });
    }

    return { ...response.entity, avatar: response.assets.avatarId };
  }

  async updateOneByUserId(userId: string, body: UpdateProfileBodyDto) {
    const entity = await this.findOneByUserId(userId);

    const updates = await this.repository
      .model()
      .update({ where: { id: entity.id }, data: removeUndefined(body) });

    return { ...entity, ...updates };
  }

  async updateAvatarByUserId(userId: string, file: Express.Multer.File) {
    const entity = await this.findOneByUserId(userId);

    if (!entity.avatarId) {
      const asset = await this.assetsService.create(userId, file);

      await this.repository
        .model()
        .update({ where: { userId }, data: { avatarId: asset.id } });
      entity.avatar = asset;
    } else {
      const asset = await this.assetsService.updateById(entity.avatarId, file);
      entity.avatar = asset;
    }

    return entity;
  }
}
