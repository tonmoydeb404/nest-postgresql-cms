import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ContentStage } from 'generated/prisma';

export class CreateCustomerCompanyBodyDto {
  @ApiProperty({
    description: 'Name of the customer company',
    example: 'Acme Corporation',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Current stage of the content',
    enum: ContentStage,
    default: ContentStage.DRAFT,
  })
  @IsEnum(ContentStage)
  @IsOptional()
  stage?: ContentStage;
}
