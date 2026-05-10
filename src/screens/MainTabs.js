import React, { useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import DashboardScreen from './DashboardScreen';
import WorkoutsScreen from './WorkoutsScreen';
import NutritionTabScreen from './NutritionTabScreen';
import ProgressScreen from './ProgressScreen';
import ProfileScreen from './ProfileScreen';

export default function MainTabs() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Dashboard': return <DashboardScreen />;
      case 'Workouts': return <WorkoutsScreen />;
      case 'Nutrition': return <NutritionTabScreen />;
      case 'Progress': return <ProgressScreen />;
      case 'Profile': return <ProfileScreen />;
      default: return <DashboardScreen />;
    }
  };

  const TabButton = ({ name, icon, label }) => {
    const isActive = activeTab === name;
    return (
      <TouchableOpacity
        onPress={() => setActiveTab(name)}
        className="flex-1 items-center justify-center py-2"
      >
        <MaterialIcons
          name={icon}
          size={24}
          color={isActive ? '#caf300' : '#8e918d'}
        />
        <Text className={`text-[10px] mt-1 ${isActive ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-background">
      <View className="flex-1">
        {renderScreen()}
      </View>
      <SafeAreaView className="bg-surface-container border-t border-[#ffffff10]">
        <View className="flex-row items-center justify-around h-16">
          <TabButton name="Dashboard" icon="home" label="Ana Sayfa" />
          <TabButton name="Workouts" icon="fitness-center" label="Antrenman" />
          <TabButton name="Nutrition" icon="restaurant" label="Beslenme" />
          <TabButton name="Progress" icon="trending-up" label="Gelişim" />
          <TabButton name="Profile" icon="person" label="Profil" />
        </View>
      </SafeAreaView>
    </View>
  );
}
