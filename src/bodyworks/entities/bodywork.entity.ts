import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { bodyType } from "src/enums/bodywork.enum";
import { Car } from "src/cars/entities/car.entity";

@Entity()
export class Bodywork {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    // *** This, when enum is needed ***
    // @Column({ type: "enum", enum: bodyType })
    // body_type: bodyType

    @OneToMany(() => Car, car => car.bodyWork) 
    cars: Car[]


}
