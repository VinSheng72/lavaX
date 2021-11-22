import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StoryBookModule } from './storybooks/storybook.module';
StoryBookModule
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    StoryBookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
