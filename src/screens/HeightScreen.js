import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import VerticalSlider from '../components/VerticalSlider';

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

          <View className="flex-row items-baseline justify-center w-full h-[72px] mb-8 z-20 pointer-events-none">
             <Text className="font-h1 text-[64px] leading-none text-primary-fixed font-extrabold" style={{
               textShadowColor: 'rgba(202,243,0,0.4)',
               textShadowOffset: {width: 0, height: 0},
               textShadowRadius: 15
             }}>
               {height}
             </Text>
             <Text className="ml-2 font-body-md text-xl text-primary-fixed/80">cm</Text>
          </View>

          <VerticalSlider
             min={100} max={250}
             initialValue={180}
             onValueChange={(val) => setHeight(val)}
          />

        </View>

        <View className="mt-auto pt-md pb-md">
          <Button onPress={() => navigation.navigate('CurrentWeightScreen')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
