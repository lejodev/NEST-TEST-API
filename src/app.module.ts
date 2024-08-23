import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BodyworksModule } from './bodyworks/bodyworks.module';

@Module({
  imports: [
    CarsModule,
    BodyworksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      // entities: [__dirname + '**/*.entity{.ts,.js}'],
      autoLoadEntities: true, // Use it instead of entities[]
      synchronize: true // Use only in production
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
