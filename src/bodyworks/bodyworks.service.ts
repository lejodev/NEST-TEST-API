import { Injectable } from '@nestjs/common';
import { CreateBodyworkDto } from './dto/create-bodywork.dto';
import { UpdateBodyworkDto } from './dto/update-bodywork.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bodywork } from './entities/bodywork.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BodyworksService {

  constructor(@InjectRepository(Bodywork) private bodyWorkRepository: Repository<Bodywork>) { }

  async create(createBodyworkDto: CreateBodyworkDto) {
    const createUser = await this.bodyWorkRepository.create(createBodyworkDto)
    return this.bodyWorkRepository.save(createUser)
  }

  findAll() {
    return this.bodyWorkRepository.find()
  }

  findOne(id: number) {
    return this.bodyWorkRepository.findOneBy({ id })
  }

  update(id: number, updateBodyworkDto: UpdateBodyworkDto) {
    return this.bodyWorkRepository.update(id, updateBodyworkDto)
  }

  remove(id: number) {
    return `This action removes a #${id} bodywork`;
  }
}
