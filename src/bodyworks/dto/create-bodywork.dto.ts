import { IsEnum, IsString } from "class-validator";
import { bodyType } from "src/enums/bodywork.enum";

export class CreateBodyworkDto {

    @IsString()
    name: string

    // ***this, when enum is needed ***
    // @IsEnum(bodyType, { message: "Bodywork doe not exist" })
    // body_type: bodyType
}
