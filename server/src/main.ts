import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbSeeder } from './util/db.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dbSeeder = app.get(DbSeeder);
  await dbSeeder.setUp();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3000);
}

bootstrap();
