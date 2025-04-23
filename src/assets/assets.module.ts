import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets.controller';
import { AssetsService } from './services/assets.service';
import { ImgbbService } from './services/imgbb.service';

@Module({
  controllers: [AssetsController],
  providers: [AssetsService, ImgbbService],
  exports: [AssetsService],
})
export class AssetsModule {}
