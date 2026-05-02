import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function SleepScreen({ navigation }) {
  const [sleep, setSleep] = useState(8);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 flex-col justify-between px-margin pt-lg pb-xl max-w-lg mx-auto w-full relative z-10">
        <ProgressBar progress={75} />

        <View className="flex-1 flex-col justify-center items-center relative">
          <View className="absolute inset-0 bg-primary-container opacity-5 rounded-full z-[-1]" style={{
            shadowColor: '#caf300',
            shadowOpacity: 0.1,
            shadowRadius: 100,
            elevation: 0,
            transform: [{ scale: 1.5 }]
          }} />

          <View className="text-center mb-12 w-full">
            <Text className="font-h2 text-[32px] text-primary mb-sm text-center leading-tight">Günde ortalama kaç saat uyuyorsun?</Text>
            <Text className="font-body-lg text-[18px] text-on-surface-variant max-w-[280px] mx-auto text-center leading-snug">
              Dinlenme süren, antrenman performansını doğrudan etkiler.
            </Text>
          </View>

          <View className="w-full bg-surface-container p-md rounded-xl border border-[#ffffff10] shadow-lg">
            <View className="flex-col items-center justify-center mb-8">
              <View className="flex-row items-baseline justify-center">
                <Text className="text-[64px] font-h1 text-primary-container leading-none">{sleep}</Text>
                <Text className="font-h3 text-h3 text-on-surface-variant ml-2">saat</Text>
              </View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant mt-2 tracking-widest uppercase">
                Optimal İyileşme
              </Text>
            </View>

            <View className="relative w-full mt-4 mb-2 h-10 justify-center">
              <View className="absolute left-0 right-0 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                 <View className="h-full bg-primary-container w-[66%]" />
              </View>
              <View className="absolute w-8 h-8 rounded-full bg-primary-container border-4 border-background" style={{
                left: '66%',
                marginLeft: -16,
                shadowColor: "rgba(202,243,0,0.5)",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 5,
              }} />
            </View>

            <View className="flex-row justify-between w-full mt-4 px-1">
              {['4s', '5s', '6s', '7s', '8s', '9s', '10s'].map((val, idx) => (
                <Text key={idx} className={`font-label-caps text-[12px] ${
                  val === '8s' ? 'text-primary-container opacity-100 font-bold' : 'text-on-surface-variant opacity-60'
                }`}>
                  {val}
                </Text>
              ))}
            </View>

            <View className="mt-8 flex-row items-start gap-3 bg-[#0e0e0e] p-3 rounded-lg border border-[#ffffff05]">
              <MaterialIcons name="info" size={20} color="#caf300" style={{ marginTop: 2 }} />
              <Text className="font-body-md text-[14px] text-secondary leading-snug flex-1">
                Kas onarımı ve hormonal denge için yetişkinlerin günde 7-9 saat uyuması önerilir.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 p-6 pt-lg z-20"
      >
        <Button onPress={() => navigation.navigate('TargetMuscleScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
