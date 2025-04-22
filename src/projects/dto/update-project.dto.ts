import { PartialType } from '@nestjs/swagger';
import { CreateProjectBodyDto } from './create-project.dto';

export class UpdateProjectBodyDto extends PartialType(CreateProjectBodyDto) {}
