import { Injectable } from '@nestjs/common';
import { Asset, Prisma, Profile } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssetRepository } from './asset.repository';

@Injectable()
export class ProfileRepository {
  constructor(
    private prisma: PrismaService,
    private assetRepository: AssetRepository,
  ) {}

  model() {
    return this.prisma.profile;
  }

  async findOneWithAsset<T extends keyof Pick<Profile, 'avatarId'>>(
    args: Prisma.ProfileFindUniqueArgs,
    assets: T[],
  ): Promise<{
    entity: Profile | null;
    assets: Partial<Record<T, Asset | undefined>>;
  }> {
    const entity = await this.model().findUnique(args);

    if (!entity) {
      return { entity, assets: {} };
    }

    const assetsFound = await Promise.all(
      assets.map((key) => {
        const value = entity[key];
        if (!value) return null;
        return this.assetRepository
          .model()
          .findUnique({ where: { id: value } });
      }),
    );
    const assetsObj = assets.reduce((prev, curr, index) => {
      prev[curr] = assetsFound[index] ?? undefined;
      return prev;
    }, {} as any);

    return { entity, assets: assetsObj };
  }
}
