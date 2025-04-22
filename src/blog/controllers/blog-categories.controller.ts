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
import { CreateBlogCategoryBodyDto } from '../dto/create-blog-category.dto';
import { UpdateBlogCategoryBodyDto } from '../dto/update-blog-category.dto';
import { BlogCategoriesService } from '../services/blog-categories.service';

@ApiTags('Blog Categories')
@Controller('blog-categories')
export class BlogCategoriesController {
  constructor(private readonly service: BlogCategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new blog category' })
  @ApiResponse({
    status: 201,
    description: 'Blog category created successfully',
  })
  create(@Body() body: CreateBlogCategoryBodyDto) {
    return this.service.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all blog categories' })
  @ApiResponse({
    status: 200,
    description: 'List of blog categories retrieved successfully',
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a blog category by ID' })
  @ApiResponse({
    status: 200,
    description: 'Blog category retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog category not found' })
  findOne(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog category' })
  @ApiResponse({
    status: 200,
    description: 'Blog category updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog category not found' })
  update(@Param('id') id: string, @Body() body: UpdateBlogCategoryBodyDto) {
    return this.service.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog category' })
  @ApiResponse({
    status: 200,
    description: 'Blog category deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog category not found' })
  remove(@Param('id') id: string) {
    return this.service.deleteById(id);
  }
}
