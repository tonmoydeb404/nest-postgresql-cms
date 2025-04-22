import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { CustomerCompanyRepository } from 'src/prisma/repository/customer/company.repository';
import { CreateCustomerCompanyBodyDto } from '../dto/create-customer-company.dto';
import { UpdateCustomerCompanyBodyDto } from '../dto/update-customer-company.dto';

@Injectable()
export class CustomerCompaniesService {
  constructor(private repository: CustomerCompanyRepository) {}

  async create(body: CreateCustomerCompanyBodyDto) {
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

  async updateById(id: string, body: UpdateCustomerCompanyBodyDto) {
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
