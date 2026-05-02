import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function ActivityScreen({ navigation }) {
  const [activityLevel, setActivityLevel] = useState('moderately_active');

  const options = [
    { id: 'sedentary', title: 'Hareketsiz', description: 'Masa başı iş, çok az veya hiç egzersiz yapmıyorum.', icon: 'chair' },
    { id: 'lightly_active', title: 'Az aktif', description: 'Hafif egzersiz, haftada 1-3 gün spor.', icon: 'directions-walk' },
    { id: 'moderately_active', title: 'Orta aktif', description: 'Orta seviye egzersiz, haftada 3-5 gün spor.', icon: 'fitness-center' },
    { id: 'very_active', title: 'Çok aktif', description: 'Ağır egzersiz, haftada 6-7 gün spor veya fiziksel iş.', icon: 'directions-run' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-6 pt-md pb-xl">
        <View className="w-full mb-lg flex-col gap-sm">
          <ProgressBar progress={75} />
        </View>

        <View className="mb-lg">
          <Text className="font-h1 text-[36px] text-primary mb-sm leading-tight">Günlük ne kadar aktifsin?</Text>
          <Text className="font-body-md text-[16px] text-on-surface-variant">Hedeflerine ulaşman için sana en uygun programı oluşturmamıza yardımcı ol.</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-col gap-sm pb-32">
            {options.map((option) => {
              const isSelected = activityLevel === option.id;

              return (
                <TouchableOpacity
                  key={option.id}
                  activeOpacity={0.8}
                  onPress={() => setActivityLevel(option.id)}
                  className={`relative flex-col p-md rounded-xl border mb-4 min-h-[160px] ${
                    isSelected
                      ? 'bg-surface-container-high border-primary-fixed shadow-lg'
                      : 'bg-surface-container border-surface-container-highest'
                  }`}
                  style={isSelected ? {
                    shadowColor: "rgba(202,243,0,0.1)",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 15,
                    elevation: 5,
                  } : {}}
                >
                  <View className="absolute top-4 right-4 z-10">
                    <MaterialIcons
                      name="check-circle"
                      size={24}
                      color={isSelected ? '#caf300' : '#353534'}
                    />
                  </View>

                  <View className={`w-12 h-12 rounded-full flex items-center justify-center mb-sm ${
                    isSelected ? 'bg-primary-container' : 'bg-surface-container-high'
                  }`}>
                    <MaterialIcons
                      name={option.icon}
                      size={24}
                      color={isSelected ? '#596c00' : '#c5c9ac'}
                    />
                  </View>

                  <Text className="font-h3 text-[20px] text-primary mb-1">{option.title}</Text>
                  <Text className="font-body-md text-[14px] text-on-surface-variant mt-auto">{option.description}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 p-6 pt-lg z-20"
      >
        <Button onPress={() => navigation.navigate('WorkoutEnvironmentScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
