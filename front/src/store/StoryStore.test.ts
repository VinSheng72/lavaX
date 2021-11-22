import { StoryModel, Chapter, HomeStoryStore } from "./StoryStore";

it("Story Modal", () => {
    const item = Chapter.create({
        title: "Chapter1",
        content: "nothing to be written here"
    })

    expect(item.content).toBe("nothing to be written here")
})


// it("Category Model", () => {
//     const item = Category.create({
//         type: "Action",
//     })
//     const item2 = Category.create({
//         type: "Fiction",
//     })
//     const item3 = Category.create({
//         type: "Non-Fiction",
//     })

//     expect(item.type).toBe("Action")
//     expect(item2.type).toBe("Fiction")
//     expect(item3.type).toBe("Non-Fiction")
// })


it("Story Model", () => {
    let chapterList = []
    chapterList.push(Chapter.create({ title: "Chapter1", content: "nothing to be written here" }))
    const date = new Date()
    const story = StoryModel.create({
        name: "Bear2",
        createDate: date,
        chapters: chapterList,
        category: "Action"
    })

    expect(story.name).toBe("Bear2")
    expect(story.createDate).toBe(date)
    expect(story.chapters).toStrictEqual([
        {
            title: "Chapter1",
            content: "nothing to be written here"
        }
    ])
    expect(story.category).toBe("Action")
})

it("add new story model", () => {
    const list = HomeStoryStore.create()
    list.addStory(StoryModel.create({
        name: "Book1",
        createDate: new Date,
        chapters: [{
            title: "Chapter1",
            content: "good morning"
        }],
        category: "Action"
    }))

    expect(list.stories.length).toBe(1)
    expect(list.stories[0].name).toBe("Book1")
    expect(list.stories[0].chapters[0]).toStrictEqual({
        title: "Chapter1",
        content: "good morning"
    })
    expect(list.stories[0].category).toBe("Action")

    expect(list.stories[0].chapters.length).toBe(1)
    list.stories[0].addChapter({ title: "Chapter2", content: "good morning" })
    list.stories[0].addChapter({ title: "Chapter3", content: "good morning" })
    list.stories[0].addChapter({ title: "Chapter4", content: "good morning" })
    expect(list.stories[0].chapters.length).toBe(4)
    list.stories[0].removeChapter(2)
    expect(list.stories[0].chapters).toStrictEqual([{
        title: "Chapter1",
        content: "good morning"
    }, { title: "Chapter2", content: "good morning" }, { title: "Chapter4", content: "good morning" }])s
    list.stories[0].updateChapter(0, "good")
    expect(list.stories[0].chapters[0].content).toBe("good")

})