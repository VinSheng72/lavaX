import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";
import { chapter } from "src/storybooks/models/chapter";



@InputType()
export class CreateStorybookInput {
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    createDate: string;

    @Field()
    @IsNotEmpty()
    chapters: chapter[];

    @Field()
    @IsNotEmpty()
    category: string;
}

