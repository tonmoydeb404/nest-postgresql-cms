import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsEnum,
  IsUUID,
} from 'class-validator';
import { PermissionAction, PermissionName } from 'generated/prisma';

export class CreateUserRolePermissionBodyDto {
  @ApiProperty({ enum: PermissionName, description: 'Name of the permission' })
  @IsEnum(PermissionName)
  name: PermissionName;

  @ApiProperty({
    type: [String],
    enum: PermissionAction,
    description: 'Allowed actions for this permission',
    example: [PermissionAction.READ, PermissionAction.UPDATE],
  })
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(PermissionAction, { each: true })
  actions: PermissionAction[];

  @ApiProperty({
    description: 'ID of the associated user role',
    example: 'uuid',
  })
  @IsUUID()
  roleId: string;
}
