// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import DropDown from './Screens/DropDown';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DropDown"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="login"
          component={Login}
     
        />
        <Stack.Screen
          headerShown={false}
          name="DropDown"
          component={DropDown}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
