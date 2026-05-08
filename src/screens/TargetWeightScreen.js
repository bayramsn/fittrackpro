import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

// Mock slider since we can't implement complex gesture handling without extra libraries easily
// Representing the visual ticks statically for now.
export default function TargetWeightScreen({ navigation }) {
  const [weight, setWeight] = useState(65);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-6 pt-8 pb-32 max-w-md mx-auto w-full">
        <ProgressBar progress={75} />

        <View className="text-center mb-12">
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

          <View className="w-full relative h-32 flex-row items-center justify-center bg-surface-container rounded-3xl border border-surface-variant shadow-inner overflow-hidden">
            <View className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-container z-10 -ml-[2px]" style={{
              shadowColor: 'rgba(202,243,0,0.8)',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 1,
              shadowRadius: 10
            }} />
            <View className="absolute left-1/2 top-0 w-4 h-4 bg-primary-container rounded-b-full -ml-[8px] z-20" />
            <View className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary-container rounded-t-full -ml-[8px] z-20" />

            <View className="flex-row items-center space-x-4 h-full px-4">
              <View className="items-center opacity-50 px-3">
                <Text className="font-body-lg text-body-lg text-on-surface-variant mb-2">60</Text>
                <View className="w-1 h-8 bg-surface-variant rounded-full" />
              </View>
              <View className="items-center opacity-50 px-1">
                <View className="w-[2px] h-4 bg-surface-variant rounded-full mt-8" />
              </View>
              <View className="items-center opacity-50 px-1">
                <View className="w-[2px] h-6 bg-surface-variant rounded-full mt-6" />
              </View>
              <View className="items-center opacity-50 px-1">
                <View className="w-[2px] h-4 bg-surface-variant rounded-full mt-8" />
              </View>
              <View className="items-center opacity-100 px-3">
                <Text className="font-body-lg text-body-lg text-on-surface mb-2 font-bold">65</Text>
                <View className="w-1 h-10 bg-on-surface rounded-full" />
              </View>
              <View className="items-center opacity-50 px-1">
                <View className="w-[2px] h-4 bg-surface-variant rounded-full mt-8" />
              </View>
              <View className="items-center opacity-50 px-1">
                <View className="w-[2px] h-6 bg-surface-variant rounded-full mt-6" />
              </View>
              <View className="items-center opacity-50 px-1">
                <View className="w-[2px] h-4 bg-surface-variant rounded-full mt-8" />
              </View>
              <View className="items-center opacity-50 px-3">
                <Text className="font-body-lg text-body-lg text-on-surface-variant mb-2">70</Text>
                <View className="w-1 h-8 bg-surface-variant rounded-full" />
              </View>
            </View>
          </View>

          <View className="mt-6 flex-row items-center justify-center">
            <MaterialIcons name="swipe" size={20} color="#c5c9ac" />
            <Text className="font-body-md text-sm text-on-surface-variant ml-2">Sağa veya sola kaydırın</Text>
          </View>
        </View>

        <View className="mt-auto pt-6">
          <Button onPress={() => navigation.navigate('NutritionScreen')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
