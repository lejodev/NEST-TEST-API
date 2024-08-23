import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { Bodywork } from 'src/bodyworks/entities/bodywork.entity';

@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(Car) private carRepository: Repository<Car>,
    @InjectRepository(Bodywork) private bodyWorkRepository: Repository<Bodywork>
  ) { }

  async create(createCarDto: CreateCarDto) {

    // const car = new Car()
    // car.make = createCarDto.make;
    // car.reference = createCarDto.reference;
    // car.year = createCarDto.year;
    // car.color = createCarDto.color;
    // car.doors = createCarDto.doors;

    // const bodyworkName = createCarDto.bodyWork; // Ensure this matches your DTO property
    const bodywork = await this.bodyWorkRepository.findOneBy({ name: createCarDto.bodyWork });

    if (!bodywork) {
      throw new BadRequestException("Bodywork not found ")
    }

    const car = new Car()
    car.make = createCarDto.make;
    car.reference = createCarDto.reference;
    car.year = createCarDto.year;
    car.color = createCarDto.color;
    car.doors = createCarDto.doors;
    car.bodyWork = bodywork

    return await this.carRepository.save(car)
  }

  findAll() {
    return this.carRepository.find()
  }

  findOne(id: number) {
    return this.carRepository.findOneBy({ id })
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    // return this.carRepository.update(id, updateCarDto)
  }

  remove(id: number) {
    return this.carRepository.delete(id)
  }
}
