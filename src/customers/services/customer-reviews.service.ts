import { Injectable } from '@nestjs/common';
import { removeUndefined } from 'src/common/utils/object';
import { CustomerReviewRepository } from 'src/prisma/repository/customer/review.repository';
import { CreateCustomerReviewBodyDto } from '../dto/create-customer-review.dto';
import { UpdateCustomerReviewBodyDto } from '../dto/update-customer-review.dto';

@Injectable()
export class CustomerReviewsService {
  constructor(private repository: CustomerReviewRepository) {}

  async create(body: CreateCustomerReviewBodyDto) {
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

  async updateById(id: string, body: UpdateCustomerReviewBodyDto) {
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
