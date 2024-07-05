import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Subscribe" component={SubscribeScreen} options={{headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
  );
};

export default RootNavigator;