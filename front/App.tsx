import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabScreen } from './src/navigation/MainNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {


  return (
    <NavigationContainer>
      <BottomTabScreen />
    </NavigationContainer>
  );
};



export default App;
