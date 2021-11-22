import React, { useLayoutEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    View,
    Button,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import InputRow from '../components/InputRow';
import { useNavigation, useRoute } from '@react-navigation/native';
import SwipePagination from '../components/SwipePagination';
import { Chapter, StoryModel, useHomeStory, category } from '../store/StoryStore';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';

const content = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [content, setContent] = useState(route.params?.content ?? "")
    useLayoutEffect(() => {
        navigation.setOptions({ headerRight: () => <Button title="Save Story" onPress={onSaveSubmit} /> });
    }, [navigation, content]);

    const onSaveSubmit = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TextInput style={{
                flex: 1,
                width: "100%",
                height: 150,
                fontSize: 20,
                color: "black",
                textAlignVertical: "top", // android fix for centering it at the top-left corner 
            }} value={content} onChangeText={setContent} placeholder={"Write your story here..."} multiline />
        </SafeAreaView>
    );
};




export default content;
