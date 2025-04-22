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
import { CreateBlogReactionBodyDto } from '../dto/create-blog-reaction.dto';
import { UpdateBlogReactionBodyDto } from '../dto/update-blog-reaction.dto';
import { BlogReactionsService } from '../services/blog-reactions.service';

@ApiTags('Blog Reactions')
@Controller('blog-reactions')
export class BlogReactionsController {
  constructor(private readonly service: BlogReactionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new blog reaction' })
  @ApiResponse({
    status: 201,
    description: 'Blog reaction created successfully',
  })
  create(@Body() body: CreateBlogReactionBodyDto) {
    return this.service.create(body);
  }

  @Post('upsert')
  @ApiOperation({
    summary: 'Upsert a blog reaction (create or update if exists)',
  })
  @ApiResponse({
    status: 200,
    description: 'Blog reaction upserted successfully',
  })
  upsert(@Body() body: CreateBlogReactionBodyDto) {
    return this.service.upsert(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all blog reactions' })
  @ApiResponse({
    status: 200,
    description: 'List of blog reactions retrieved successfully',
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a blog reaction by ID' })
  @ApiResponse({
    status: 200,
    description: 'Blog reaction retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog reaction not found' })
  findOne(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog reaction' })
  @ApiResponse({
    status: 200,
    description: 'Blog reaction updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog reaction not found' })
  update(@Param('id') id: string, @Body() body: UpdateBlogReactionBodyDto) {
    return this.service.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog reaction' })
  @ApiResponse({
    status: 200,
    description: 'Blog reaction deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog reaction not found' })
  remove(@Param('id') id: string) {
    return this.service.deleteById(id);
  }
}
