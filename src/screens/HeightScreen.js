import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function HeightScreen({ navigation }) {
  const [height, setHeight] = useState(180);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar minimal={true} />

      <View className="flex-1 px-margin py-xl max-w-md mx-auto w-full overflow-hidden">
        <ProgressBar progress={25} />

        <View className="text-center mb-xl w-full max-w-sm mx-auto items-center">
          <Text className="font-h1 text-[40px] text-primary mb-sm text-center">Boyun kaç cm?</Text>
          <Text className="font-body-md text-[16px] text-on-surface-variant text-center">
            Vücuduna en uygun programı oluşturabilmemiz için bu bilgiye ihtiyacımız var.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center relative my-lg w-full overflow-hidden">
          <View className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <View className="w-full h-[72px] bg-white/[0.03] border-y border-primary/20 relative">
              <View className="absolute top-0 left-1/2 w-32 h-[1px] bg-primary/40 -ml-16" />
              <View className="absolute bottom-0 left-1/2 w-32 h-[1px] bg-primary/40 -ml-16" />
            </View>
          </View>

          <LinearGradient colors={['#121212', 'transparent']} className="absolute top-0 left-0 w-full h-1/4 z-20 pointer-events-none" />
          <LinearGradient colors={['transparent', '#121212']} className="absolute bottom-0 left-0 w-full h-1/4 z-20 pointer-events-none" />

          <View className="flex-col items-center justify-center gap-1 w-full z-10">
            <View className="items-center justify-center w-full h-[60px] opacity-40">
              <Text className="text-surface-variant font-h3 text-2xl scale-75">{height - 3}</Text>
            </View>
            <View className="items-center justify-center w-full h-[60px] opacity-60">
              <Text className="text-surface-variant font-h2 text-3xl scale-90">{height - 2}</Text>
            </View>
            <View className="items-center justify-center w-full h-[60px] opacity-80">
              <Text className="text-surface-variant font-h2 text-4xl">{height - 1}</Text>
            </View>

            <View className="flex-row items-baseline justify-center w-full h-[72px]">
              <Text className="font-h1 text-[64px] leading-none text-primary-fixed font-extrabold" style={{
                textShadowColor: 'rgba(202,243,0,0.4)',
                textShadowOffset: {width: 0, height: 0},
                textShadowRadius: 15
              }}>
                {height}
              </Text>
              <Text className="ml-2 font-body-md text-xl text-primary-fixed/80">cm</Text>
            </View>

            <View className="items-center justify-center w-full h-[60px] opacity-80">
              <Text className="text-surface-variant font-h2 text-4xl">{height + 1}</Text>
            </View>
            <View className="items-center justify-center w-full h-[60px] opacity-60">
              <Text className="text-surface-variant font-h2 text-3xl scale-90">{height + 2}</Text>
            </View>
            <View className="items-center justify-center w-full h-[60px] opacity-40">
              <Text className="text-surface-variant font-h3 text-2xl scale-75">{height + 3}</Text>
            </View>
          </View>
        </View>

        <View className="mt-auto pt-md pb-md">
          <Button onPress={() => navigation.navigate('InjuryScreen')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
