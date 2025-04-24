import { Module } from '@nestjs/common';
import { AssetsModule } from 'src/assets/assets.module';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';

@Module({
  imports: [AssetsModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfilesModule {}
