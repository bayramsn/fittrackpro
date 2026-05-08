import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function GoalScreen({ navigation }) {
  const [selectedGoal, setSelectedGoal] = useState('muscle');

  const goals = [
    { id: 'weight_loss', title: 'Kilo Vermek', icon: 'monitor-weight' },
    { id: 'muscle', title: 'Kas Kazanmak', icon: 'fitness-center' },
    { id: 'strength', title: 'Güçlenmek', icon: 'bolt' },
    { id: 'stay_fit', title: 'Formda Kalmak', icon: 'directions-run' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-margin py-md">
        <ProgressBar progress={6} />

        <View className="mb-lg mt-sm">
          <Text className="font-h1 text-h1 text-primary mb-sm">Hedefin nedir?</Text>
          <Text className="font-body-lg text-body-lg text-on-surface-variant">
            Sana en uygun antrenman planını oluşturabilmemiz için temel hedefini seç.
          </Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between">
            {goals.map((goal) => {
              const isSelected = selectedGoal === goal.id;

              return (
                <TouchableOpacity
                  key={goal.id}
                  activeOpacity={0.8}
                  onPress={() => setSelectedGoal(goal.id)}
                  className={`w-[48%] h-44 flex flex-col items-center justify-center p-md rounded-xl mb-4 border ${
                    isSelected
                      ? 'bg-surface-container-high border-primary-container'
                      : 'bg-surface-container border-outline-variant'
                  }`}
                  style={isSelected ? {
                    shadowColor: "rgba(202,243,0,0.1)",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 20,
                    elevation: 5,
                  } : {}}
                >
                  <View className={`w-16 h-16 rounded-full flex items-center justify-center mb-sm transition-colors ${
                    isSelected ? 'bg-primary-container' : 'bg-background'
                  }`}>
                    <MaterialIcons
                      name={goal.icon}
                      size={32}
                      color={isSelected ? '#596c00' : '#ffffff'}
                    />
                  </View>
                  <Text className={`font-h3 text-[18px] text-center ${
                    isSelected ? 'text-primary-container' : 'text-primary'
                  }`}>
                    {goal.title}
                  </Text>

                  {isSelected && (
                    <View className="absolute top-2 right-2">
                      <MaterialIcons name="check-circle" size={24} color="#caf300" />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 px-margin pt-md pb-xl z-10"
      >
        <Button onPress={() => navigation.navigate('GenderScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
