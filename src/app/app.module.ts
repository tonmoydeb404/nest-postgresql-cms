import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from 'src/auth/auth.module';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './controllers/app.controller';
import { GlobalModule } from './global.module';
import { AppService } from './services/app.service';

@Module({
  imports: [GlobalModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [],
})
export class AppModule {}
