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
import { CreateCustomerReviewBodyDto } from '../dto/create-customer-review.dto';
import { UpdateCustomerReviewBodyDto } from '../dto/update-customer-review.dto';
import { CustomerReviewsService } from '../services/customer-reviews.service';

@ApiTags('Customer Reviews')
@Controller('customer-reviews')
export class CustomerReviewsController {
  constructor(private service: CustomerReviewsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer review' })
  @ApiResponse({
    status: 201,
    description: 'Customer review created successfully',
  })
  create(@Body() body: CreateCustomerReviewBodyDto) {
    return this.service.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customer reviews' })
  @ApiResponse({
    status: 200,
    description: 'List of customer reviews retrieved successfully',
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a customer review by ID' })
  @ApiResponse({
    status: 200,
    description: 'Customer review retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Customer review not found' })
  findOne(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a customer review' })
  @ApiResponse({
    status: 200,
    description: 'Customer review updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Customer review not found' })
  update(@Param('id') id: string, @Body() body: UpdateCustomerReviewBodyDto) {
    return this.service.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer review' })
  @ApiResponse({
    status: 200,
    description: 'Customer review deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Customer review not found' })
  remove(@Param('id') id: string) {
    return this.service.deleteById(id);
  }
}
