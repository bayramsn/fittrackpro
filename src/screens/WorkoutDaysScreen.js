import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function WorkoutDaysScreen({ navigation }) {
  const [selectedDay, setSelectedDay] = useState(4);

  return (
    <SafeAreaView className="flex-1 bg-background relative">
      <View className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6GU6Vir6ch0w-As8sAFU2cJqSDABJtst5iJNGgtzm4QlmpIqU3B7fARESE2b0p_DNWabE2oBRxGbP7g2yKBq6Tfg3-0tDnjrbysoLdaFUkxKPc7KSQH87xdTJIx66n7Zgb5Lgzd3sSyF4ixmv_eUr9Z0mVw5Pom3ma59f74K7JYAviEMdvpW_ACVtuRRrqhf1l3nXVwt-uiX5cmjDmWx05qAB0fIu10JNALS5ECeTOTb91T8aErUA8iNkU78m84FZuVcoHwsaL4k' }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(19,19,19,0.4)', 'rgba(19,19,19,0.8)', '#131313']}
            className="absolute inset-0"
          />
        </ImageBackground>
      </View>

      <TopAppBar />

      <View className="flex-1 px-margin pt-12 pb-[120px] z-10 relative">
        <ProgressBar progress={12} />

        <View className="mb-xl">
          <Text className="font-h1 text-[40px] leading-tight text-on-surface mb-sm">Haftada kaç gün antrenman yapabilirsin?</Text>
          <Text className="font-body-lg text-[18px] text-on-surface-variant">Sürdürülebilir bir program için gerçekçi bir hedef belirle.</Text>
        </View>

        <View className="flex-row flex-wrap justify-center justify-between mb-4">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => {
            const isSelected = selectedDay === day;
            return (
              <TouchableOpacity
                key={day}
                activeOpacity={0.8}
                onPress={() => setSelectedDay(day)}
                className={`w-[31%] h-28 mb-4 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${
                  isSelected
                    ? 'bg-primary-container border-2 border-primary-container'
                    : 'bg-surface-container border border-[#ffffff10]'
                }`}
                style={isSelected ? {
                  transform: [{ scale: 1.05 }],
                  shadowColor: "rgba(202,243,0,0.2)",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 24,
                  elevation: 10,
                } : {}}
              >
                <Text className={`font-h2 text-[32px] ${
                  isSelected ? 'text-on-primary-container' : 'text-on-surface'
                }`}>{day}</Text>
                <Text className={`font-label-caps text-[12px] uppercase ${
                  isSelected ? 'text-on-primary-container opacity-80' : 'text-on-surface-variant'
                }`}>Gün</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View className="absolute bottom-0 left-0 right-0 p-6 pb-8 z-50">
        <Button onPress={() => navigation.navigate('WorkoutEnvironmentScreen')} />
      </View>
    </SafeAreaView>
  );
}
