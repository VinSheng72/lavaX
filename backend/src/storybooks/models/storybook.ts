import { Field, Int, ObjectType } from "@nestjs/graphql";
import { chapter } from "./chapter";

@ObjectType()
export class StoryBook {
    @Field()
    name: string;

    @Field()
    createDate: string;

    @Field(() => [chapter])
    chapters: chapter[];

    @Field()
    category: string;
}