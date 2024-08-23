import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { BodyworksService } from 'src/bodyworks/bodyworks.service';
import { BodyworksModule } from 'src/bodyworks/bodyworks.module';
import { Bodywork } from 'src/bodyworks/entities/bodywork.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Car, Bodywork])],
  controllers: [CarsController],
  providers: [CarsService, BodyworksService],
})
export class CarsModule {}
