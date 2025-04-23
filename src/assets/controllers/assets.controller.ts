import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/auth/decorators/user.decorator';
import { AssetsService } from '../services/assets.service';

@ApiTags('Assets')
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all assets' })
  @ApiResponse({ status: 200, description: 'List of assets returned' })
  findAll() {
    return this.assetsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an asset by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Asset UUID' })
  @ApiResponse({ status: 200, description: 'Asset found' })
  @ApiResponse({ status: 404, description: 'Asset not found' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.assetsService.findOneById(id);
  }

  @Post('upload')
  @ApiOperation({ summary: 'Upload a single asset' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Single file upload',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadOne(
    @UploadedFile() file: Express.Multer.File,
    @User('id') authorId: string,
  ) {
    return this.assetsService.create(authorId, file);
  }

  @Post('upload/multiple')
  @ApiOperation({ summary: 'Upload multiple assets' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Multiple files upload',
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(FilesInterceptor('files'))
  uploadMany(
    @UploadedFiles() files: Express.Multer.File[],
    @User('id') authorId: string,
  ) {
    return this.assetsService.createMultiple(authorId, files);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an asset by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Asset UUID' })
  @ApiResponse({ status: 200, description: 'Asset deleted' })
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.assetsService.deleteById(id);
  }

  @Post('delete/multiple')
  @ApiOperation({ summary: 'Delete multiple assets by IDs' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        ids: {
          type: 'array',
          items: { type: 'string', format: 'uuid' },
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Assets deleted' })
  deleteMany(@Body('ids') ids: string[]) {
    return this.assetsService.deleteMultipleById(ids);
  }
}
