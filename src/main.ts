import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import { authCookieKey } from './auth/auth.constant';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Cookie Support
  app.use(cookieParser(config.get('app.cookie_secret')));

  // API Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Enable class-validator globally
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Swagger ----------------------------------------------------------------------
  const swagger = new DocumentBuilder()
    .setTitle('Nest Postgresql CMS')
    .setDescription('Nest Postgresql CMS API')
    .setVersion('1.0')
    .addCookieAuth(authCookieKey)
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api', app, documentFactory);

  const PORT = config.get('app.port') ?? 3000;
  await app.listen(PORT, () => {
    logger.log(`Application is running At: http://localhost:${PORT}`);
    logger.log(`Application Documentation: http://localhost:${PORT}/api`);
  });
}
bootstrap();
