import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeBodyDto } from './create-employee.dto';

export class UpdateEmployeeBodyDto extends PartialType(CreateEmployeeBodyDto) {}
