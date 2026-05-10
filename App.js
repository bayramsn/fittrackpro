import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { useFonts as useInterFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts as useLexendFonts, Lexend_700Bold, Lexend_800ExtraBold } from '@expo-google-fonts/lexend';

import { AppProvider, useApp } from './src/context/AppContext';

// Auth & Onboarding
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import EmailVerificationScreen from './src/screens/EmailVerificationScreen';
import GoalScreen from './src/screens/GoalScreen';
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
import PlanGeneratingScreen from './src/screens/PlanGeneratingScreen';
import SubscriptionOfferScreen from './src/screens/SubscriptionOfferScreen';

// Main Experience
import DashboardScreen from './src/screens/DashboardScreen';
import WorkoutsScreen from './src/screens/WorkoutsScreen';
import NutritionTabScreen from './src/screens/NutritionTabScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Feature Modules
import ProgramRecommendationScreen from './src/screens/ProgramRecommendationScreen';
import WorkoutActiveScreen from './src/screens/WorkoutActiveScreen';
import CameraAnalysisScreen from './src/screens/CameraAnalysisScreen';
import PoseDetectionResultScreen from './src/screens/PoseDetectionResultScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ChallengeScreen from './src/screens/ChallengeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import AchievementScreen from './src/screens/AchievementScreen';

// B2B & Admin
import CoachPanelScreen from './src/screens/CoachPanelScreen';
import GymPanelScreen from './src/screens/GymPanelScreen';
import AdminPanelScreen from './src/screens/AdminPanelScreen';

// Details
import ExerciseDetailScreen from './src/screens/ExerciseDetailScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#131313',
  },
};

const TabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Dashboard', icon: 'home', label: 'Ana Sayfa' },
    { name: 'Workouts', icon: 'fitness-center', label: 'Antrenman' },
    { name: 'Nutrition', icon: 'restaurant', label: 'Beslenme' },
    { name: 'Progress', icon: 'trending-up', label: 'Gelişim' },
    { name: 'Community', icon: 'groups', label: 'Topluluk' },
  ];

  return (
    <View className="flex-row bg-surface-container border-t border-white/5 pb-8 pt-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => setActiveTab(tab.name)}
            className="flex-1 items-center justify-center py-2"
          >
            <MaterialIcons
              name={tab.icon}
              size={24}
              color={isActive ? '#caf300' : '#8f9378'}
            />
            <Text className={`text-[10px] mt-1 font-medium ${isActive ? 'text-primary-container' : 'text-on-surface-variant/60'}`}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

function MainTabs({ navigation }) {
  const [activeTab, setActiveTab] = React.useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return <DashboardScreen navigation={navigation} />;
      case 'Workouts': return <WorkoutsScreen navigation={navigation} />;
      case 'Nutrition': return <NutritionTabScreen navigation={navigation} />;
      case 'Progress': return <ProgressScreen navigation={navigation} />;
      case 'Community': return <CommunityScreen navigation={navigation} />;
      default: return <DashboardScreen navigation={navigation} />;
    }
  };

  return (
    <View className="flex-1 bg-background">
      <View className="flex-1">
        {renderContent()}
      </View>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

function Navigation() {
  const { user } = useApp();

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#131313' },
          animation: 'slide_from_right'
        }}
      >
        {!user.onboardingComplete ? (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="EmailVerificationScreen" component={EmailVerificationScreen} />
            <Stack.Screen name="GenderScreen" component={GenderScreen} />
            <Stack.Screen name="AgeScreen" component={AgeScreen} />
            <Stack.Screen name="HeightScreen" component={HeightScreen} />
            <Stack.Screen name="CurrentWeightScreen" component={CurrentWeightScreen} />
            <Stack.Screen name="GoalScreen" component={GoalScreen} />
            <Stack.Screen name="TargetWeightScreen" component={TargetWeightScreen} />
            <Stack.Screen name="WorkoutDaysScreen" component={WorkoutDaysScreen} />
            <Stack.Screen name="FitnessLevelScreen" component={FitnessLevelScreen} />
            <Stack.Screen name="WorkoutEnvironmentScreen" component={WorkoutEnvironmentScreen} />
            <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
            <Stack.Screen name="NutritionScreen" component={NutritionScreen} />
            <Stack.Screen name="SleepScreen" component={SleepScreen} />
            <Stack.Screen name="InjuryScreen" component={InjuryScreen} />
            <Stack.Screen name="TargetMuscleScreen" component={TargetMuscleScreen} />
            <Stack.Screen name="PlanGeneratingScreen" component={PlanGeneratingScreen} />
            <Stack.Screen name="ProgramRecommendationScreen" component={ProgramRecommendationScreen} />
            <Stack.Screen name="SubscriptionOfferScreen" component={SubscriptionOfferScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="WorkoutActiveScreen" component={WorkoutActiveScreen} />
            <Stack.Screen name="CameraAnalysisScreen" component={CameraAnalysisScreen} />
            <Stack.Screen name="PoseDetectionResultScreen" component={PoseDetectionResultScreen} />
            <Stack.Screen name="ChallengeScreen" component={ChallengeScreen} />
            <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
            <Stack.Screen name="AchievementScreen" component={AchievementScreen} />
            <Stack.Screen name="CoachPanelScreen" component={CoachPanelScreen} />
            <Stack.Screen name="GymPanelScreen" component={GymPanelScreen} />
            <Stack.Screen name="AdminPanelScreen" component={AdminPanelScreen} />
            <Stack.Screen name="ExerciseDetailScreen" component={ExerciseDetailScreen} />
            <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
      <AppProvider>
        <Navigation />
      </AppProvider>
    </SafeAreaProvider>
  );
}
