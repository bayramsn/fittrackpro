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
import WeightEntryScreen from './src/screens/main/WeightEntryScreen';
import WarmupScreen from './src/screens/main/WarmupScreen';
import VideoPlayerScreen from './src/screens/main/VideoPlayerScreen';
import AlternativeExerciseScreen from './src/screens/main/AlternativeExerciseScreen';
import ExerciseDetailScreen from './src/screens/main/ExerciseDetailScreen';
import OneRMCalculatorScreen from './src/screens/main/OneRMCalculatorScreen';
import WorkoutDelayScreen from './src/screens/main/WorkoutDelayScreen';
import FoodSearchScreen from './src/screens/main/FoodSearchScreen';
import FoodDetailScreen from './src/screens/main/FoodDetailScreen';
import FoodAddedSuccessScreen from './src/screens/main/FoodAddedSuccessScreen';
import BodyMeasurementsScreen from './src/screens/main/BodyMeasurementsScreen';
import BodyFatCalculatorScreen from './src/screens/main/BodyFatCalculatorScreen';
import ProgressGalleryScreen from './src/screens/main/ProgressGalleryScreen';
import BMRInfoScreen from './src/screens/main/BMRInfoScreen';
import AccountSettingsScreen from './src/screens/main/AccountSettingsScreen';
import ChangePasswordScreen from './src/screens/main/ChangePasswordScreen';
import EditGoalsNavScreen from './src/screens/main/EditGoalsNavScreen';
import NotificationSettingsScreen from './src/screens/main/NotificationSettingsScreen';
import ExternalAppsScreen from './src/screens/main/ExternalAppsScreen';
import SupplementTrackingScreen from './src/screens/main/SupplementTrackingScreen';
import AddSupplementScreen from './src/screens/main/AddSupplementScreen';

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
          <Stack.Screen name="WeightEntry" component={WeightEntryScreen} />
          <Stack.Screen name="SupplementTracking" component={SupplementTrackingScreen} />
          <Stack.Screen name="AddSupplement" component={AddSupplementScreen} />
          <Stack.Screen name="WarmupScreen" component={WarmupScreen} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{ presentation: 'fullScreenModal' }} />
          <Stack.Screen name="AlternativeExercise" component={AlternativeExerciseScreen} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
          <Stack.Screen name="OneRMCalculator" component={OneRMCalculatorScreen} />
          <Stack.Screen name="WorkoutDelay" component={WorkoutDelayScreen} />
          <Stack.Screen name="FoodSearch" component={FoodSearchScreen} />
          <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
          <Stack.Screen name="FoodAddedSuccess" component={FoodAddedSuccessScreen} options={{ presentation: 'fullScreenModal' }} />
          <Stack.Screen name="BodyMeasurements" component={BodyMeasurementsScreen} />
          <Stack.Screen name="BodyFatCalculator" component={BodyFatCalculatorScreen} />
          <Stack.Screen name="ProgressGallery" component={ProgressGalleryScreen} />
          <Stack.Screen name="BMRInfo" component={BMRInfoScreen} />
          <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
          <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
          <Stack.Screen name="EditGoalsNav" component={EditGoalsNavScreen} />
          <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
          <Stack.Screen name="ExternalApps" component={ExternalAppsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
