import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function NutritionScreen({ navigation }) {
  const [selectedNutrition, setSelectedNutrition] = useState('normal');

  const nutritionOptions = [
    { id: 'normal', title: 'Normal', icon: 'restaurant' },
    { id: 'high_protein', title: 'Yüksek protein', icon: 'egg-alt' },
    { id: 'diet', title: 'Diyet yapıyorum', icon: 'set-meal' },
    { id: 'vegetarian_vegan', title: 'Vejetaryen / Vegan', icon: 'energy-savings-leaf' }, // Using energy-savings-leaf as fallback for nutrition
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-margin py-md max-w-2xl mx-auto w-full pb-32">
        <ProgressBar progress={75} />

        <View className="mb-lg">
          <Text className="font-h1 text-h1 text-on-background mb-sm">Beslenme tercihin nedir?</Text>
          <Text className="font-body-lg text-body-lg text-on-surface-variant">Sana en uygun planı oluşturabilmemiz için beslenme alışkanlıklarını bilmemiz gerekiyor.</Text>
        </View>

        <ScrollView className="flex-1 flex-col gap-sm" showsVerticalScrollIndicator={false}>
          {nutritionOptions.map((option) => {
            const isSelected = selectedNutrition === option.id;

            return (
              <TouchableOpacity
                key={option.id}
                activeOpacity={0.8}
                onPress={() => setSelectedNutrition(option.id)}
                className={`relative flex-row items-center p-md rounded-xl border mb-3 ${
                  isSelected
                    ? 'bg-surface-container-high border-primary-container'
                    : 'bg-surface-container border-[#ffffff10]'
                }`}
              >
                <View className={`w-6 h-6 rounded-full border-2 mr-md flex items-center justify-center ${
                  isSelected ? 'border-primary-container bg-primary-container' : 'border-outline-variant'
                }`}>
                  {isSelected && <MaterialIcons name="check" size={16} color="#2a3400" />}
                </View>

                <View className="flex-1">
                  <Text className={`font-h3 text-[20px] ${
                    isSelected ? 'text-primary-container' : 'text-on-background'
                  }`}>
                    {option.title}
                  </Text>
                </View>

                <MaterialIcons
                  name={option.icon}
                  size={32}
                  color={isSelected ? '#c5c9ac' : '#c5c9ac'}
                  style={{ opacity: isSelected ? 1 : 0.5 }}
                />

                {isSelected && (
                  <View className="absolute inset-0 rounded-xl border-2 border-primary-container pointer-events-none" />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 p-6 pt-lg z-20"
      >
        <Button onPress={() => navigation.navigate('SleepScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
