import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {useState} from "react";
import SubscribeScreen from "./Components/SubscribeScreen";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
//npx create-expo-app@latest --template blank [expo 디렉터리 이름]
// 실행 명령어: npx expo start --localhost --android

const Stack = createNativeStackNavigator();
export default function App() {

    return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Home"
              >
              <Stack.Screen
                name='Home'
                component={Home}
                  />
              <Stack.Screen
                name='Subscribe' 
                component={SubscribeScreen}
              />
              <Stack.Screen
                name='Menu'
                component={Menu}
              />
          </Stack.Navigator>
      </NavigationContainer>
    );
}
