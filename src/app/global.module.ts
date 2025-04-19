import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/common/config/jwt.config';
import { PrismaModule } from 'src/prisma/prisma.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [jwtConfig],
    }),
    PrismaModule,
  ],
  controllers: [],
  providers: [],
  exports: [PrismaModule, ConfigModule],
})
export class GlobalModule {}
