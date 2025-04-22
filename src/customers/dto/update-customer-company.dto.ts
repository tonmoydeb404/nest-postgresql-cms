import { PartialType } from '@nestjs/swagger';
import { CreateCustomerCompanyBodyDto } from './create-customer-company.dto';

export class UpdateCustomerCompanyBodyDto extends PartialType(
  CreateCustomerCompanyBodyDto,
) {}
