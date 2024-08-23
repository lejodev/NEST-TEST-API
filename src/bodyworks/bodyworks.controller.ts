import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BodyworksService } from './bodyworks.service';
import { CreateBodyworkDto } from './dto/create-bodywork.dto';
import { UpdateBodyworkDto } from './dto/update-bodywork.dto';

@Controller('bodyworks')
export class BodyworksController {
  constructor(private readonly bodyworksService: BodyworksService) {}

  @Post()
  create(@Body() createBodyworkDto: CreateBodyworkDto) {
    return this.bodyworksService.create(createBodyworkDto);
  }

  @Get()
  findAll() {
    return this.bodyworksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodyworksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBodyworkDto: UpdateBodyworkDto) {
    return this.bodyworksService.update(+id, updateBodyworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodyworksService.remove(+id);
  }
}
