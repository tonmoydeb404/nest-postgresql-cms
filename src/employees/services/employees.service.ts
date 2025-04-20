import { Injectable, NotFoundException } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { EmployeeRepository } from 'src/prisma/repository/employee.repository';
import { CreateEmployeeBodyDto } from '../dto/create-employee.dto';
import { UpdateEmployeeBodyDto } from '../dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeeRepository) {}

  async create(dto: CreateEmployeeBodyDto) {
    return this.employeeRepository.createWithSlugify({ data: dto });
  }

  findAll() {
    return this.employeeRepository.model().findMany({});
  }

  async findOneById(id: string) {
    const employee = await this.employeeRepository.model().findUnique({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return employee;
  }

  async updateById(id: string, dto: UpdateEmployeeBodyDto) {
    await this.findOneById(id);

    return this.employeeRepository.model().update({
      where: { id },
      data: removeUndefined(dto),
    });
  }

  async removeById(id: string) {
    await this.findOneById(id);
    return this.employeeRepository.model().delete({ where: { id } });
  }
}
