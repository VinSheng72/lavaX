import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class chapter {
    @Field()
    title: string;

    @Field()
    content: string;


}