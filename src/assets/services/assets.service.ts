import { Injectable, NotFoundException } from '@nestjs/common';
import { AssetRepository } from 'src/prisma/repository/asset.repository';
import { ImgbbService } from './imgbb.service';

@Injectable()
export class AssetsService {
  constructor(
    private repository: AssetRepository,
    private imgbbService: ImgbbService,
  ) {}

  findAll() {
    return this.repository.model().findMany({});
  }

  async findOneById(id: string) {
    const entity = await this.repository.model().findUnique({ where: { id } });

    if (!entity) {
      throw new NotFoundException('Asset not found');
    }

    return entity;
  }

  async create(authorId: string, file: Express.Multer.File) {
    const response = await this.imgbbService.uploadFile(file);

    return this.repository.model().create({
      data: {
        authorId,
        name: response.data.title,
        path: response.data.url,
        mimetype: response.data.image.mime,
        size: parseInt(response.data.size),
        meta: {
          width: parseInt(response.data.width),
          height: parseInt(response.data.height),
        },
      },
    });
  }

  deleteById(id: string) {
    return this.repository.model().delete({ where: { id } });
  }

  async createMultiple(authorId: string, files: Express.Multer.File[]) {
    const uploadResults = await this.imgbbService.uploadFiles(files);

    return this.repository.model().createManyAndReturn({
      data: uploadResults.map((item) => ({
        authorId,
        name: item.data.title,
        path: item.data.url,
        mimetype: item.data.image.mime,
        size: parseInt(item.data.size),
        meta: {
          width: parseInt(item.data.width),
          height: parseInt(item.data.height),
        },
      })),
    });
  }

  async deleteMultipleById(ids: string[]) {
    const response = await this.repository
      .model()
      .deleteMany({ where: { id: { in: ids } } });
    return response.count;
  }

  async updateById(id: string, file: Express.Multer.File) {
    const entity = await this.findOneById(id);

    const response = await this.imgbbService.uploadFile(file);

    return this.repository.model().update({
      where: { id: entity.id },
      data: {
        name: response.data.title,
        path: response.data.url,
        mimetype: response.data.image.mime,
        size: parseInt(response.data.size),
        meta: {
          width: parseInt(response.data.width),
          height: parseInt(response.data.height),
        },
      },
    });
  }
}
