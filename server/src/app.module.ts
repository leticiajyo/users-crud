import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DbSeeder } from './util/db.seeder';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    UserModule,
  ],
  providers: [DbSeeder],
})
export class AppModule {}
