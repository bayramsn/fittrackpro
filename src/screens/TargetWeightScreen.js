import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import HorizontalRulerSlider from '../components/HorizontalRulerSlider';

export default function TargetWeightScreen({ navigation }) {
  const [weight, setWeight] = useState(65);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-6 pt-8 pb-32 max-w-md mx-auto w-full">
        <ProgressBar progress={50} />

        <View className="text-center mb-12 mt-6">
          <Text className="font-h1 text-[32px] text-on-surface mb-4 text-center">Ulaşmak istediğin kilo nedir?</Text>
          <Text className="font-body-md text-body-md text-on-surface-variant text-center">Hedefini belirle, planını yapalım.</Text>
        </View>

        <View className="flex-1 flex flex-col items-center justify-center relative w-full mb-12">
          <View className="relative flex-row items-baseline justify-center mb-12">
            <Text className="font-h1 text-[80px] leading-none text-primary-container" style={{
              textShadowColor: 'rgba(202,243,0,0.3)',
              textShadowOffset: {width: 0, height: 0},
              textShadowRadius: 15
            }}>{weight}</Text>
            <Text className="font-h3 text-h3 text-on-surface-variant ml-2">kg</Text>

            <View className="absolute -top-6 items-center">
              <Text className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container mb-1">Hedef</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color="#caf300" />
            </View>
          </View>

          <View className="w-full bg-surface-container rounded-3xl border border-surface-variant shadow-inner overflow-hidden py-4">
             <HorizontalRulerSlider
                min={30} max={200}
                initialValue={65}
                step={1}
                onValueChange={(val) => setWeight(val)}
             />
          </View>

          <View className="mt-6 flex-row items-center justify-center">
            <MaterialIcons name="swipe" size={20} color="#c5c9ac" />
            <Text className="font-body-md text-sm text-on-surface-variant ml-2">Sağa veya sola kaydırın</Text>
          </View>
        </View>

        <View className="mt-auto pt-6">
          <Button onPress={() => navigation.navigate('WorkoutDaysScreen')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
