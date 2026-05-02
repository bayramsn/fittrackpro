import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import HorizontalRulerSlider from '../components/HorizontalRulerSlider';

export default function CurrentWeightScreen({ navigation }) {
  const [weight, setWeight] = useState(75);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar minimal={true} />

      <View className="flex-1 w-full flex flex-col items-center justify-center px-6 relative z-0">
        <View className="w-full absolute top-0 px-6 pt-4">
          <ProgressBar progress={35} />
        </View>

        <View className="text-center mb-xl w-full max-w-sm mt-12">
          <Text className="font-h1 text-[36px] text-primary mb-sm text-center leading-tight">Kilon kaç kg?</Text>
          <Text className="font-body-md text-body-md text-on-surface-variant text-center px-4">
            Vücuduna en uygun programı oluşturabilmemiz için bu bilgiye ihtiyacımız var.
          </Text>
        </View>

        <View className="w-full max-w-md flex flex-col items-center bg-surface-container rounded-xl p-md shadow-lg border border-[#ffffff05] relative overflow-hidden">
          <View className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-container opacity-[0.03] rounded-full pointer-events-none -ml-16 -mt-16" />

          <View className="flex-row items-baseline justify-center mb-8 mt-4">
            <Text className="font-h1 text-h1 text-primary-container">{weight}</Text>
            <Text className="font-h3 text-h3 text-on-surface-variant ml-xs">kg</Text>
          </View>

          <HorizontalRulerSlider
             min={30} max={200}
             initialValue={75}
             step={1}
             onValueChange={(val) => setWeight(val)}
          />

          <Text className="font-label-caps text-label-caps text-surface-variant mt-md text-center">Sağa veya sola kaydırın</Text>
        </View>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 w-full px-6 py-8 mt-auto shrink-0 z-10 relative"
      >
        <Button onPress={() => navigation.navigate('GoalScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
