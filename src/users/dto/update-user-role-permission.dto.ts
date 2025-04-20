import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserRolePermissionBodyDto } from './create-user-role-permission.dto';

export class UpdateUserRolePermissionBodyDto extends PartialType(
  OmitType(CreateUserRolePermissionBodyDto, ['name', 'roleId']),
) {}
