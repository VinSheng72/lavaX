import React, { useEffect, useRef, useState } from "react";
import { FlatList, View, Platform, Text, Dimensions, TouchableOpacity } from "react-native";
import { Chapter } from '../store/StoryStore';
const { width } = Dimensions.get('window');
const itemWidth = width / (1 + .5);
const startScroll = (itemWidth * 3 / 4)
export interface Props {
    data: Chapter[],
    onDelete: (index: number) => void
    onEdit: (index: number, content: string) => void
}

const SwipePagination: React.FC<Props> = ({ data, onDelete, onEdit }) => {
    let listRef = useRef<FlatList>(null)



    const snapToOffsets = data.map((x, i) => {
        return ((i * itemWidth) + startScroll)
    })

    useEffect(() => {
        if (listRef.current) listRef.current.scrollToOffset({
            offset: startScroll, animated: false
        });
    }, [listRef]);


    return (

        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            renderItem={({ item, index }) => {
                return (
                    <View key={index + item.title} style={{
                        marginTop: 20,
                        backgroundColor: 'gray',
                        width: itemWidth - 20, //20 is margin left and right
                        margin: 10,
                        height: 300,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#aaa', }} >{item.title}</Text>
                        <TouchableOpacity onPress={() => onEdit(index, item.content)} style={{ borderWidth: 1, paddingHorizontal: 10 }} ><Text style={{ fontSize: 30, fontWeight: 'bold', color: '#aaa', }} >Edit</Text></TouchableOpacity>
                        <View style={{ height: 10 }} />
                        <TouchableOpacity onPress={() => onDelete(index)} style={{ borderWidth: 1, paddingHorizontal: 10 }}  ><Text style={{ fontSize: 30, fontWeight: 'bold', color: '#aaa', }}  >Delete</Text></TouchableOpacity>
                    </View>)
            }}
            keyExtractor={(item, index) => index.toString()}
            snapToOffsets={snapToOffsets}
            decelerationRate={0}
            snapToAlignment={"center"}
            getItemLayout={(data, index) => ({ length: width, offset: width * index, index })}
            ref={listRef}
        />


    );

}
export default SwipePagination;