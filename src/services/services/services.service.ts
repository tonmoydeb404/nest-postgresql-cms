import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { ServiceRepository } from 'src/prisma/repository/service.repository';
import { CreateServiceBodyDto } from '../dto/create-service.dto';
import { UpdateServiceBodyDto } from '../dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private repository: ServiceRepository) {}

  async create(body: CreateServiceBodyDto) {
    return this.repository.model().create({
      data: body,
    });
  }

  async findAll() {
    return this.repository.model().findMany();
  }

  async findOneById(id: string) {
    return this.repository.model().findUnique({
      where: { id },
    });
  }

  async updateById(id: string, body: UpdateServiceBodyDto) {
    return this.repository.model().update({
      where: { id },
      data: removeUndefined(body),
    });
  }

  async deleteById(id: string) {
    return this.repository.model().delete({
      where: { id },
    });
  }
}
