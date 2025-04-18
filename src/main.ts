import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  // API Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Enable class-validator globally
  app.useGlobalPipes(new ValidationPipe());

  // Swagger ----------------------------------------------------------------------
  const config = new DocumentBuilder()
    .setTitle('Nest Postgresql CMS')
    .setDescription('Nest Postgresql CMS API')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT, () => {
    logger.log(`Application is running At: http://localhost:${PORT}`);
    logger.log(`Application Documentation: http://localhost:${PORT}/api`);
  });
}
bootstrap();
