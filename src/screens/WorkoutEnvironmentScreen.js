import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function WorkoutEnvironmentScreen({ navigation }) {
  const [environment, setEnvironment] = useState('gym');

  const options = [
    { id: 'gym', title: 'Spor Salonu', description: 'Tam donanımlı aletlerle', icon: 'fitness-center' },
    { id: 'home', title: 'Ev', description: 'Kendi alanında, rahatça', icon: 'home' },
    { id: 'no_equipment', title: 'Ekipmansız', description: 'Sadece vücut ağırlığınla', icon: 'directions-run' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-6 pt-12 pb-32">
        <ProgressBar progress={75} />

        <View className="mb-lg">
          <Text className="font-h2 text-[32px] text-on-surface">Nerede antrenman yapıyorsun?</Text>
          <Text className="font-body-lg text-[18px] text-on-surface-variant mt-sm">Sana en uygun programı hazırlayabilmemiz için temel çalışma alanını seç.</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-col gap-margin">
            {options.map((option) => {
              const isSelected = environment === option.id;

              return (
                <TouchableOpacity
                  key={option.id}
                  activeOpacity={0.8}
                  onPress={() => setEnvironment(option.id)}
                  className={`w-full flex-row items-center p-md rounded-xl border mb-5 ${
                    isSelected
                      ? 'bg-surface-container-high border-primary-fixed'
                      : 'bg-surface-container border-outline-variant opacity-80'
                  }`}
                  style={isSelected ? {
                    shadowColor: "rgba(202,243,0,0.15)",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 24,
                    elevation: 5,
                  } : {}}
                >
                  {isSelected && (
                    <View className="absolute inset-0 bg-primary-fixed opacity-5 pointer-events-none rounded-xl" />
                  )}

                  <View className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 mr-md ${
                    isSelected ? 'bg-[rgba(202,243,0,0.1)]' : 'bg-surface-variant'
                  }`}>
                    <MaterialIcons
                      name={option.icon}
                      size={32}
                      color={isSelected ? '#caf300' : '#c5c9ac'}
                    />
                  </View>

                  <View className="flex-1">
                    <Text className="font-h3 text-[24px] text-on-surface">{option.title}</Text>
                    <Text className="font-body-md text-[16px] text-on-surface-variant mt-xs">{option.description}</Text>
                  </View>

                  {isSelected ? (
                    <MaterialIcons name="check-circle" size={28} color="#caf300" />
                  ) : (
                    <View className="w-7 h-7 rounded-full border-2 border-outline-variant shrink-0" />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', 'rgba(19,19,19,0.9)', '#131313']}
        className="absolute bottom-0 left-0 right-0 p-6 pt-lg z-50"
      >
        <Button onPress={() => navigation.navigate('HeightScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
