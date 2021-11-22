import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '../screen/home';
import add from '../screen/Add';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import content from '../screen/Content';

const HomeStack = createNativeStackNavigator();


function HomeStackScreen() {
    return (

        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={home} />
        </HomeStack.Navigator>

    );
}

const AddStack = createNativeStackNavigator();

function AddStackScreen() {
    return (
        <AddStack.Navigator>
            <AddStack.Screen name="Add" component={add} />
            <AddStack.Screen name="Content" component={content} />
        </AddStack.Navigator>

    );
}

const BottomTab = createBottomTabNavigator();


export function BottomTabScreen() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute' } }} >
            <BottomTab.Screen name="HomeTab" component={HomeStackScreen} />
            <BottomTab.Screen name="AddTab" component={AddStackScreen}
                options={({ route }) => ({ tabBarStyle: { display: getTabBarStyle(route) } })}
            />
        </BottomTab.Navigator>
    );
}
const getTabBarStyle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    return (routeName === 'Content') ? 'none' : 'flex';
}

