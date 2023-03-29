import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbSeeder } from './util/db.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dbSeeder = app.get(DbSeeder);
  await dbSeeder.setUp();

  await app.listen(3000);
}

bootstrap();
