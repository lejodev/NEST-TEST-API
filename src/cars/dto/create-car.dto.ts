import { isNumber, IsNumber, IsPositive, IsString } from "class-validator"
import { Car } from "../entities/car.entity"
import { Bodywork } from "src/bodyworks/entities/bodywork.entity"

export class CreateCarDto {

    @IsString()
    make: string

    @IsString()
    reference: string

    @IsNumber()
    @IsPositive()
    year: number

    @IsString()
    color: string

    @IsNumber()
    @IsPositive()
    doors: number

    @IsString()
    bodyWork: string

    
}


