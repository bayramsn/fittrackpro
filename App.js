import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts as useInterFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts as useLexendFonts, Lexend_700Bold, Lexend_800ExtraBold } from '@expo-google-fonts/lexend';

// Screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import GoalScreen from './src/screens/GoalScreen';
import NutritionPreferenceScreen from './src/screens/NutritionPreferenceScreen';
import PlanSummaryScreen from './src/screens/PlanSummaryScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import GenderScreen from './src/screens/GenderScreen';
import TargetWeightScreen from './src/screens/TargetWeightScreen';
import CurrentWeightScreen from './src/screens/CurrentWeightScreen';
import NutritionScreen from './src/screens/NutritionScreen';
import AgeScreen from './src/screens/AgeScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import FitnessLevelScreen from './src/screens/FitnessLevelScreen';
import SleepScreen from './src/screens/SleepScreen';
import WorkoutDaysScreen from './src/screens/WorkoutDaysScreen';
import WorkoutEnvironmentScreen from './src/screens/WorkoutEnvironmentScreen';
import HeightScreen from './src/screens/HeightScreen';
import InjuryScreen from './src/screens/InjuryScreen';
import TargetMuscleScreen from './src/screens/TargetMuscleScreen';
import ProgramRecommendationScreen from './src/screens/ProgramRecommendationScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import ActiveWorkoutScreen from './src/screens/main/ActiveWorkoutScreen';
import BMICalculatorScreen from './src/screens/main/BMICalculatorScreen';

const Stack = createNativeStackNavigator();

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#131313',
  },
};

export default function App() {
  const [interLoaded] = useInterFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  });

  const [lexendLoaded] = useLexendFonts({
    'Lexend-Bold': Lexend_700Bold,
    'Lexend-ExtraBold': Lexend_800ExtraBold,
  });

  if (!interLoaded || !lexendLoaded) {
    return (
      <View className="flex-1 bg-[#131313] justify-center items-center">
        <ActivityIndicator size="large" color="#caf300" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#131313' },
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
          <Stack.Screen name="GoalScreen" component={GoalScreen} />
          <Stack.Screen name="NutritionPreferenceScreen" component={NutritionPreferenceScreen} />
          <Stack.Screen name="PlanSummaryScreen" component={PlanSummaryScreen} />
          <Stack.Screen name="GenderScreen" component={GenderScreen} />
          <Stack.Screen name="CurrentWeightScreen" component={CurrentWeightScreen} />
          <Stack.Screen name="TargetWeightScreen" component={TargetWeightScreen} />
          <Stack.Screen name="NutritionScreen" component={NutritionScreen} />
          <Stack.Screen name="AgeScreen" component={AgeScreen} />
          <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
          <Stack.Screen name="FitnessLevelScreen" component={FitnessLevelScreen} />
          <Stack.Screen name="SleepScreen" component={SleepScreen} />
          <Stack.Screen name="WorkoutDaysScreen" component={WorkoutDaysScreen} />
          <Stack.Screen name="WorkoutEnvironmentScreen" component={WorkoutEnvironmentScreen} />
          <Stack.Screen name="HeightScreen" component={HeightScreen} />
          <Stack.Screen name="InjuryScreen" component={InjuryScreen} />
          <Stack.Screen name="TargetMuscleScreen" component={TargetMuscleScreen} />
          <Stack.Screen name="ProgramRecommendationScreen" component={ProgramRecommendationScreen} />
          <Stack.Screen name="MainTabs" component={MainTabNavigator} options={{ animation: 'fade' }} />
          <Stack.Screen name="ActiveWorkout" component={ActiveWorkoutScreen} options={{ presentation: 'fullScreenModal', animation: 'slide_from_bottom' }} />
          <Stack.Screen name="BMICalculator" component={BMICalculatorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
