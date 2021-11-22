import { types, Instance } from "mobx-state-tree"

export const category = [{ type: "Action" }, { type: "Fiction" }, { type: "Non-Fiction" }, { type: "Romance" }, { type: "Horror" }, { type: "Thriller" }]
export interface Chapter {
    title: string,
    content: string,
}

export const Chapter = types.model("Chapter", {
    title: types.string,
    content: types.optional(types.string, "")
}).actions(self => ({
    addChapter(title: string, content: string) {
        self.title = title
        self.content = content
    },
    updateContent(content: string) {
        self.content = content
    }
}))


interface IChapterModel extends Instance<typeof Chapter> { }
interface IChapterModelArray extends Instance<typeof Chapter[]> { }
export const StoryModel = types.model("StoryModel", {
    name: types.string,
    createDate: types.Date,
    chapters: types.optional(types.array(Chapter), []),
    category: types.string
}).actions(self => ({
    addStory(name: string, createDate: Date, chapter: IChapterModel, category: string) {
        self.name = name
        self.createDate = createDate
        self.chapters.push(chapter)
        self.category = category
    },
    changeName(name: string) {
        self.name = name
    },
    changeCategory(category: string) {
        self.category = category
    },
    addChapter(chapter: IChapterModel | Chapter) {
        self.chapters.push(chapter)
    },
    removeChapter(index: number) {
        self.chapters.spliceWithArray(index, 1)
    },
    updateChapter(index: number, content: string) {
        self.chapters[index].updateContent(content)
    }

}))

interface IStoryModel extends Instance<typeof StoryModel> { }
export const HomeStoryStore = types.model("HomeStory", {
    stories: types.optional(types.array(StoryModel), []),
}).actions(self => ({
    addStory(story: IStoryModel) {
        self.stories.push(story)
    }
})).views(self => ({

    categoryStory(category: string) {
        return self.stories.filter(story => story.category === category)
    }

}))

interface IHomeStoryStore extends Instance<typeof HomeStoryStore> { }
let _HomeStory: IHomeStoryStore
export const useHomeStory = () => {
    if (!_HomeStory) {
        _HomeStory = HomeStoryStore.create({
            stories: [{
                name: "Book1",
                createDate: new Date,
                chapters: [{
                    title: "Chapter1",
                    content: "good morning"
                }],
                category: "Action"
            }, {
                name: "Book1",
                createDate: new Date,
                chapters: [{
                    title: "Chapter1",
                    content: "good morning"
                }],
                category: "Action"
            }]
        })
    }
    return _HomeStory
}



