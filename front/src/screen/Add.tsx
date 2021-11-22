import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    View,
    Button,
    Text,
    TouchableOpacity,
    TextInput,
    Alert, Modal
} from 'react-native';
import InputRow from '../components/InputRow';
import { useNavigation } from '@react-navigation/native';
import SwipePagination from '../components/SwipePagination';
import { Chapter, StoryModel, useHomeStory, category } from '../store/StoryStore';
import { Picker } from '@react-native-picker/picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const add = () => {
    const [storyName, setStoryName] = useState("")
    const [categorySelect, setCategorySelect] = useState("Action")
    const [title, setTitle] = useState("")
    const [chapter, setChapter] = useState<Chapter[]>([])
    const [isEdit, setIsEdit] = useState(false)
    const [content, setContent] = useState("")
    const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
    const homeStore = useHomeStory()

    useLayoutEffect(() => {
        navigation.setOptions({ headerRight: () => <Button title="Save Story Book" onPress={onSaveSubmit} /> });
    }, [navigation, storyName, title, chapter]);

    const clear = () => {
        setStoryName("")
        setTitle("")
        setChapter([])

    }

    const onSaveSubmit = () => {
        const story = StoryModel.create({
            name: storyName,
            createDate: new Date(),
            category: "Fiction",
            chapters: chapter,
        })
        homeStore.addStory(story)
        clear()

    }

    const onAddSubmit = () => {
        if (title === "") {
            Alert.alert("Title cannot be empty");
            return
        }
        setChapter(prevChapter => [...prevChapter, { title, content: "" }])
        setTitle("")
    }
    const onDeleteSubmit = (index: number) => {
        let temp = [...chapter]
        temp.splice(index, 1)
        setChapter(temp);
    }

    const onEdit = (index: number, content: string) => {
        setIsEdit(true)
        setContent(chapter[index].content)
        //navigation.navigate("Content", { index, content })
    }

    const onSaveAndClose = () => {
        setIsEdit(false)
        let newState = [...chapter];
        newState[0].content = content;
        setChapter(newState)
    }

    useEffect(() => {
        console.log(content)
    }, [content])

    return (
        <SafeAreaView style={{ flex: 1 }} ><View>
            <InputRow name={"Name"} value={storyName} onChangeText={setStoryName} />
            <Picker selectedValue={categorySelect} onValueChange={(itemValue, itemIndex) => setCategorySelect(itemValue)}>
                {category.map(data => {
                    return <Picker.Item key={data.type} label={data.type} value={data.type} />
                })}
            </Picker>
            <InputRow name={"Title"} value={title} onChangeText={setTitle} />
            <Button title={"Add Title"} onPress={onAddSubmit} />
            <SwipePagination data={chapter} onDelete={onDeleteSubmit} onEdit={onEdit} />
        </View>
            {isEdit && <Modal
                animationType="slide"
                transparent={true}
                visible={true}
                onRequestClose={() => { }}
            >
                <View style={{ backgroundColor: 'white', position: "absolute", width: "100%", height: "100%" }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 30 }}>Edit Story</Text>
                        <View style={{ borderWidth: 1, borderRadius: 5, width: 200, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={onSaveAndClose} ><Text style={{ fontSize: 20 }}>Save & Close</Text></TouchableOpacity>
                        </View>
                    </View>
                    <TextInput style={{
                        flex: 1,
                        width: "100%",
                        height: 150,
                        fontSize: 20,
                        color: "black",
                        textAlignVertical: "top", // android fix for centering it at the top-left corner 
                    }} value={content} onChangeText={setContent} placeholder={"Write your story here..."} multiline />
                </View>
            </Modal>}


        </SafeAreaView>
    );
};




export default add;
