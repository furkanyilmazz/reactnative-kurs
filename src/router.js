import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen Components
import Index from "./screens/index/index";

//components
import { BottomNavigator } from "./components/customBottomBar/customBottomTabBar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Router = (props) => {
  const TabScreens = () => (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="AnaSayfa" component={Index} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnaSayfa">
        <Stack.Screen
          name="AnaSayfa"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
