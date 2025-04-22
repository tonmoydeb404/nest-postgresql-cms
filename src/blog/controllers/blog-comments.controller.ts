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
import { CreateBlogCommentBodyDto } from '../dto/create-blog-comment.dto';
import { UpdateBlogCommentBodyDto } from '../dto/update-blog-comment.dto';
import { BlogCommentsService } from '../services/blog-comments.service';

@ApiTags('Blog Comments')
@Controller('blog-comments')
export class BlogCommentsController {
  constructor(private readonly service: BlogCommentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new blog comment' })
  @ApiResponse({
    status: 201,
    description: 'Blog comment created successfully',
  })
  create(@Body() body: CreateBlogCommentBodyDto) {
    return this.service.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all blog comments' })
  @ApiResponse({
    status: 200,
    description: 'List of blog comments retrieved successfully',
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a blog comment by ID' })
  @ApiResponse({
    status: 200,
    description: 'Blog comment retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog comment not found' })
  findOne(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog comment' })
  @ApiResponse({
    status: 200,
    description: 'Blog comment updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog comment not found' })
  update(@Param('id') id: string, @Body() body: UpdateBlogCommentBodyDto) {
    return this.service.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog comment' })
  @ApiResponse({
    status: 200,
    description: 'Blog comment deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog comment not found' })
  remove(@Param('id') id: string) {
    return this.service.deleteById(id);
  }
}
