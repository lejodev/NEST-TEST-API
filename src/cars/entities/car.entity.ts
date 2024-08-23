import { Bodywork } from "src/bodyworks/entities/bodywork.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    make: string

    @Column()
    reference: string

    @Column()
    year: number

    @Column()
    color: string

    @Column()
    doors: number

    @ManyToOne(() => Bodywork, bodyWork => bodyWork.id, {
        eager: true
    })
    // @JoinColumn({ name: "bodyWorkId" })
    bodyWork: Bodywork


}
