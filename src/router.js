import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen Components
import Index from "./screens/index/index";
import homePage from "./screens/homePage/homePage";

//components
import { BottomNavigator } from "./components/customBottomBar/customBottomTabBar";
import loginScreen from "./screens/loginScreen/loginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Router = (props) => {
  const TabScreens = () => (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Index" component={Index} />
      <Tab.Screen name="AnaSayfa" component={homePage} />
      <Tab.Screen name="GirisYap" component={loginScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GirisYap">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AnaSayfa"
          component={homePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GirisYap"
          component={loginScreen}
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
