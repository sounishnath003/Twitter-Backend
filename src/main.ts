import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('api');

  // OpenAPI Swagger Documentation
  const configuration = new DocumentBuilder()
    .setTitle('Twitter Backend API (Scaler)')
    .setDescription('Demo of Building Scalable API with NestJS')
    .setVersion('1.0')
    .addTag('twitter')
    .build();

  const document = SwaggerModule.createDocument(app, configuration);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(5000);
}
bootstrap();
