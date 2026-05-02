import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/main/HomeScreen';
import WorkoutScreen from '../screens/main/WorkoutScreen';
import NutritionHomeScreen from '../screens/main/NutritionHomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 1,
          borderTopColor: '#ffffff10',
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#D4FF00',
        tabBarInactiveTintColor: '#656464',
        tabBarLabelStyle: {
          fontFamily: 'Inter-Bold',
          fontSize: 10,
          letterSpacing: 0.5,
          marginTop: 4,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Workout') {
            iconName = 'fitness-center';
          } else if (route.name === 'Nutrition') {
            iconName = 'restaurant-menu';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return (
            <View className={`items-center justify-center rounded-full w-12 h-8 ${focused ? 'bg-[rgba(202,243,0,0.1)]' : ''}`}>
               <MaterialIcons name={iconName} size={24} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'ANA SAYFA' }} />
      <Tab.Screen name="Workout" component={WorkoutScreen} options={{ tabBarLabel: 'ANTRENMAN' }} />
      <Tab.Screen name="Nutrition" component={NutritionHomeScreen} options={{ tabBarLabel: 'BESLENME' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'PROFİL' }} />
    </Tab.Navigator>
  );
}
