import { Module } from '@nestjs/common';
import { BodyworksService } from './bodyworks.service';
import { BodyworksController } from './bodyworks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bodywork } from './entities/bodywork.entity';
import { CarsService } from 'src/cars/cars.service';
import { Car } from 'src/cars/entities/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bodywork, Car])],
  controllers: [BodyworksController],
  providers: [BodyworksService, CarsService],
})
export class BodyworksModule { }
