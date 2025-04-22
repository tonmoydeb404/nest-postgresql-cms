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
import { CreateBlogArticleBodyDto } from '../dto/create-blog-article.dto';
import { UpdateBlogArticleBodyDto } from '../dto/update-blog-article.dto';
import { BlogArticlesService } from '../services/blog-articles.service';

@ApiTags('Blog Articles')
@Controller('blog-articles')
export class BlogArticlesController {
  constructor(private service: BlogArticlesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new blog article' })
  @ApiResponse({
    status: 201,
    description: 'Blog article created successfully',
  })
  create(@Body() body: CreateBlogArticleBodyDto) {
    return this.service.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all blog articles' })
  @ApiResponse({
    status: 200,
    description: 'List of blog articles retrieved successfully',
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a blog article by ID' })
  @ApiResponse({
    status: 200,
    description: 'Blog article retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog article not found' })
  findOne(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog article' })
  @ApiResponse({
    status: 200,
    description: 'Blog article updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog article not found' })
  update(@Param('id') id: string, @Body() body: UpdateBlogArticleBodyDto) {
    return this.service.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog article' })
  @ApiResponse({
    status: 200,
    description: 'Blog article deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Blog article not found' })
  remove(@Param('id') id: string) {
    return this.service.deleteById(id);
  }
}
