import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { ProjectRepository } from 'src/prisma/repository/project.repository';
import { CreateProjectBodyDto } from '../dto/create-project.dto';
import { UpdateProjectBodyDto } from '../dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private repository: ProjectRepository) {}

  async create(body: CreateProjectBodyDto) {
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

  async updateById(id: string, body: UpdateProjectBodyDto) {
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
