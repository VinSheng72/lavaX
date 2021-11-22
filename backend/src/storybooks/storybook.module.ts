import { Module } from '@nestjs/common';
import { StoryResolver } from './storybook.resolver';
import { StoryBookService } from './storybook.service';


@Module({
    providers: [StoryResolver, StoryBookService],
})
export class StoryBookModule { }
