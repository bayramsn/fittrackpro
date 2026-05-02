import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

import Home from '../screens/Home';
import WorkoutPlanner from '../screens/WorkoutPlanner';
import Supplements from '../screens/Supplements';
import AddSupplement from '../screens/AddSupplement';
import CancelWorkout from '../screens/CancelWorkout';
import ActiveWorkout from '../screens/ActiveWorkout';
import PlanUpdated from '../screens/PlanUpdated';
import WarmUp from '../screens/WarmUp';
import ExerciseDemo from '../screens/ExerciseDemo';
import WeightEntry from '../screens/WeightEntry';
import DashboardPlanReady from '../screens/DashboardPlanReady';
import ProgramDetail from '../screens/ProgramDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View className="bg-zinc-950 flex-row justify-around items-center h-20 px-2 pb-6 pt-2 border-t border-zinc-800 absolute bottom-0 w-full z-50 shadow-lg shadow-black/50">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName: keyof typeof MaterialIcons.glyphMap = 'home';
        let tabLabelText = 'ANA SAYFA';
        if (route.name === 'HomeTab') {
          iconName = 'home';
          tabLabelText = 'ANA SAYFA';
        } else if (route.name === 'WorkoutTab') {
          iconName = 'fitness-center';
          tabLabelText = 'ANTRENMAN';
        } else if (route.name === 'SupplementsTab') {
          iconName = 'restaurant';
          tabLabelText = 'BESLENME';
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-col items-center justify-center w-16 active:scale-90 transition-all duration-150"
          >
            <MaterialIcons
              name={iconName}
              size={24}
              color={isFocused ? "#D4FF00" : "#52525b"}
              className="mb-1"
            />
            <Text className={`font-lexend text-[10px] font-extrabold uppercase tracking-widest ${isFocused ? 'text-[#D4FF00]' : 'text-zinc-600'}`}>
              {tabLabelText}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="WorkoutTab" component={WorkoutPlanner} />
      <Tab.Screen name="SupplementsTab" component={Supplements} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="AddSupplement" component={AddSupplement} />
      <Stack.Screen name="CancelWorkout" component={CancelWorkout} />
      <Stack.Screen name="PlanUpdated" component={PlanUpdated} />
      <Stack.Screen name="WarmUp" component={WarmUp} />
      <Stack.Screen name="ExerciseDemo" component={ExerciseDemo} />
      <Stack.Screen name="ActiveWorkout" component={ActiveWorkout} />
      <Stack.Screen name="WeightEntry" component={WeightEntry} />
      <Stack.Screen name="DashboardPlanReady" component={DashboardPlanReady} />
      <Stack.Screen name="ProgramDetail" component={ProgramDetail} />
    </Stack.Navigator>
  );
}
