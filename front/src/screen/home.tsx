import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions
} from 'react-native';
import { category, useHomeStory } from '../store/StoryStore';


export interface Props {
  category: [];
}


const home = () => {

  const [categorySelect, setCategorySelect] = useState("Action")
  let width = Dimensions.get('screen').width / 2 - 10
  const homeStore = useHomeStory()


  const handleCategory = (category: string) => {
    setCategorySelect(category)
  }

  return (
    <SafeAreaView >
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (<>
            <TouchableOpacity onPress={() => handleCategory(item.type)} style={{ flex: 1, marginHorizontal: 6, paddingHorizontal: 7, height: 40, justifyContent: "center", borderWidth: 2 }} >
              <Text>{item.type}</Text>
            </TouchableOpacity>
          </>)
        }}
      />
      <FlatList
        data={homeStore.categoryStory(categorySelect)}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => {
          return (<>
            <TouchableOpacity style={{ justifyContent: "center", width: width, height: 100, borderWidth: 2 }} >
              <Text>Name : {item.name} </Text>
              {/* <Text>Create date : {item.createDate}</Text> */}
              <Text>Total Chapter : {item.chapters?.length}</Text>
            </TouchableOpacity>
          </>)
        }}
      />
    </SafeAreaView>
  );
};



export default home;
