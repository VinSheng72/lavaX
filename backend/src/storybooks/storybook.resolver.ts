import { Resolver, Query, Args, Mutation, Parent } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-storybook.args";
import { CreateStorybookInput } from "./dto/input/create-storybook.input";


import { StoryBook } from "./models/storybook";
import { StoryBookService } from "./storybook.service";


@Resolver(() => StoryBook)
export class StoryResolver {
    constructor(private readonly storyBookService: StoryBookService) { }


    @Query(() => StoryBook)
    getStoryBooks(): StoryBook[] {
        return this.storyBookService.getStoryBook();
    }

    @Mutation(() => StoryBook)
    createStoryBook(@Args('createStoryData') @Parent() createStoryData: CreateStorybookInput): StoryBook {
        return this.storyBookService.createStorybook(createStoryData);
    }


}