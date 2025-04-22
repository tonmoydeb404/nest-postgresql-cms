import { PartialType } from '@nestjs/swagger';
import { CreateServiceBodyDto } from './create-service.dto';

export class UpdateServiceBodyDto extends PartialType(CreateServiceBodyDto) {}
