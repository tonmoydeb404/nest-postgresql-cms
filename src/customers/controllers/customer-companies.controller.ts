import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCustomerCompanyBodyDto } from '../dto/create-customer-company.dto';
import { UpdateCustomerCompanyBodyDto } from '../dto/update-customer-company.dto';
import { CustomerCompaniesService } from '../services/customer-companies.service';

@ApiTags('Customer Companies')
@Controller('customer-companies')
export class CustomerCompaniesController {
  constructor(private service: CustomerCompaniesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer company' })
  @ApiResponse({
    status: 201,
    description: 'Customer company created successfully',
  })
  create(@Body() body: CreateCustomerCompanyBodyDto) {
    return this.service.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customer companies' })
  @ApiResponse({
    status: 200,
    description: 'List of customer companies retrieved successfully',
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a customer company by ID' })
  @ApiResponse({
    status: 200,
    description: 'Customer company retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Customer company not found' })
  findOne(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a customer company' })
  @ApiResponse({
    status: 200,
    description: 'Customer company updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Customer company not found' })
  update(@Param('id') id: string, @Body() body: UpdateCustomerCompanyBodyDto) {
    return this.service.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer company' })
  @ApiResponse({
    status: 200,
    description: 'Customer company deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Customer company not found' })
  remove(@Param('id') id: string) {
    return this.service.deleteById(id);
  }
}
