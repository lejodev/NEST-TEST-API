import { PartialType } from '@nestjs/mapped-types';
import { CreateBodyworkDto } from './create-bodywork.dto';

export class UpdateBodyworkDto extends PartialType(CreateBodyworkDto) {}
