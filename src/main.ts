import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const openApiConfig = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('All public endpoints for the Users API')
    .setVersion('1.0')
    .addServer(
      'http://localhost:4000',
      'Local development server (also with K8S)',
    )
    .build();

  const document = SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs');

  console.log('Writing OpenAPI document to openapi.yaml');
  fs.writeFileSync('./openapi.yaml', JSON.stringify(document, null, 2));
}
bootstrap();
