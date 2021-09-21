import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ArticleScreen from '../Screens/ArticleScreen';
import ClipScreen from '../Screens/ClipScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from "@expo/vector-icons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
      />
    </Stack.Navigator>
  )
}
const ClipStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='Clip' component={ClipScreen} />
      <Stack.Screen name='Article' component={ArticleScreen} />
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name='Home' component={HomeStack} options={{headerShown: false}}/>
        <Tab.Screen name='Clip' component={ClipStack} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOption= ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused
        ? 'home'
        : 'home';
    } else if (route.name === 'Clip') {
      iconName = focused ? 'bookmark' : 'bookmark-o';
    }

    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

