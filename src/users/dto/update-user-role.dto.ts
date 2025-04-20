import { PartialType } from '@nestjs/swagger';
import { CreateUserRoleBodyDto } from './create-user-role.dto';

export class UpdateUserRoleBodyDto extends PartialType(CreateUserRoleBodyDto) {}
