import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import VerticalSlider from '../components/VerticalSlider';

export default function AgeScreen({ navigation }) {
  const [age, setAge] = useState(25);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="absolute inset-0 z-0 opacity-20">
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTT8YNiVHn7HtyZxSluE5Ek5jpgnsDol_0Cta8YqusRKhm3GLkC_bnc7h2q41HAQaOmORvfXYBQFyUrq0mzHR9uVylrGS2zQ6NXqqnDbq42C74FpYk-h1OgHZzXd1dv2Jh6PKm8SfIdW9dJP6Rpxk2WUBh-fA2bmkF9sMfi-JPV1vI7ZSQ7F4JVPPb4PMeA_R89GRLvEdtlHPQb9bIRNpcWAdagDId31hFrtS7s9jSH_X12ynC1OBfNIiLD3UJrzduURF3VuWgDT8' }}
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

          <View className="items-center justify-center w-full h-[72px] relative z-20 mb-8 pointer-events-none">
             <Text className="font-h1 text-[64px] leading-none text-primary-container font-extrabold" style={{
               textShadowColor: 'rgba(202,243,0,0.4)',
               textShadowOffset: {width: 0, height: 0},
               textShadowRadius: 15
             }}>
               {age}
             </Text>
          </View>

          <VerticalSlider
             min={12} max={99}
             initialValue={25}
             onValueChange={(val) => setAge(val)}
          />

        </View>

        <Text className="text-center font-body-md text-sm text-on-surface-variant/60 mt-2 mb-8">
          Aşağı veya yukarı kaydırın
        </Text>

        <View className="mt-auto">
          <Button onPress={() => navigation.navigate('HeightScreen')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
