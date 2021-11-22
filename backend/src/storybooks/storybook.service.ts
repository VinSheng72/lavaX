import { Injectable } from "@nestjs/common";
import { GetUserArgs } from "./dto/args/get-storybook.args";
import { CreateStorybookInput } from "./dto/input/create-storybook.input";
import { StoryBook } from "./models/storybook";

@Injectable()
export class StoryBookService {

    private storyBook: StoryBook[] = [];

    public getStoryBook(): StoryBook[] {
        return this.storyBook
    }


    public createStorybook(createUserData: CreateStorybookInput): StoryBook {
        const storyBook: StoryBook = {
            ...createUserData
        }

        this.storyBook.push(storyBook);

        return storyBook;
    }


}