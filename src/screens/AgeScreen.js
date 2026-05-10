import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function AgeScreen({ navigation }) {
  const [age, setAge] = useState(25);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="absolute inset-0 z-0 opacity-20">
        <ImageBackground
          source={require('../../assets/images/placeholder.png')}
          className="w-full h-full"
          resizeMode="cover"
        >
          <LinearGradient
            colors={['transparent', 'rgba(19,19,19,0.8)', '#131313']}
            className="absolute inset-0"
          />
        </ImageBackground>
      </View>

      <TopAppBar />

      <View className="flex-1 px-6 pt-12 pb-8 z-10 w-full max-w-md mx-auto">
        <View className="text-center space-y-4 mb-8 items-center">
          <ProgressBar progress={18} />

          <Text className="font-h1 text-[36px] text-primary mt-6 text-center">Kaç yaşındasın?</Text>
          <Text className="font-body-lg text-[18px] text-on-surface-variant text-center mt-4 px-4">
            Bu, kalori yakımınızı ve egzersiz hedeflerinizi kişiselleştirmemize yardımcı olur.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center relative my-12 w-full overflow-hidden">
          <View className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <View className="w-full h-[72px] bg-white/[0.03] border-y border-primary/20 relative">
              <View className="absolute top-0 left-1/2 -ml-16 w-32 h-[1px] bg-primary/40" />
              <View className="absolute bottom-0 left-1/2 -ml-16 w-32 h-[1px] bg-primary/40" />
            </View>
          </View>

          <LinearGradient colors={['#131313', 'transparent']} className="absolute top-0 left-0 w-full h-1/4 z-20 pointer-events-none" />
          <LinearGradient colors={['transparent', '#131313']} className="absolute bottom-0 left-0 w-full h-1/4 z-20 pointer-events-none" />

          <View className="flex-col items-center justify-center gap-1 w-full z-10">
            <View className="items-center justify-center w-full h-[60px]">
              <Text className="text-surface-variant font-h2 text-3xl scale-90">{age - 2}</Text>
            </View>
            <View className="items-center justify-center w-full h-[60px]">
              <Text className="text-surface-variant font-h2 text-4xl">{age - 1}</Text>
            </View>
            <View className="items-center justify-center w-full h-[72px] relative">
              <Text className="font-h1 text-[64px] leading-none text-primary-container font-extrabold" style={{
                textShadowColor: 'rgba(202,243,0,0.4)',
                textShadowOffset: {width: 0, height: 0},
                textShadowRadius: 15
              }}>
                {age}
              </Text>
            </View>
            <View className="items-center justify-center w-full h-[60px]">
              <Text className="text-surface-variant font-h2 text-4xl">{age + 1}</Text>
            </View>
            <View className="items-center justify-center w-full h-[60px]">
              <Text className="text-surface-variant font-h2 text-3xl scale-90">{age + 2}</Text>
            </View>
          </View>
        </View>

        <Text className="text-center font-body-md text-sm text-on-surface-variant/60 mt-2 mb-8">
          Aşağı veya yukarı kaydırın
        </Text>

        <View className="mt-auto">
          <Button onPress={() => navigation.navigate('ActivityScreen')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
