import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";



@InputType()
export class CreateChapterInput {
    @Field()
    @IsNotEmpty()
    title: string;

    @Field()
    @IsNotEmpty()
    content: string;

}

