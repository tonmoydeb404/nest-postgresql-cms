import { PartialType } from '@nestjs/swagger';
import { CreateCustomerReviewBodyDto } from './create-customer-review.dto';

export class UpdateCustomerReviewBodyDto extends PartialType(
  CreateCustomerReviewBodyDto,
) {}
