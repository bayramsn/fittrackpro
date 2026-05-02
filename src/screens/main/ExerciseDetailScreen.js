import React from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function ExerciseDetailScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="h-[250px] w-full relative z-0">
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLVU9e8zJXermuOs611JG1qYBolHCKuuNgy1AhhF2aZBodJzcerv-b7NkTTqARGjtxcxJSvgLgNg5bHHCiIZXcUHGngnYoHUFDm6phwsCfTXlPkYC3oi5Z_NhNlghkD9Saswltef6vkwCLNoG2BKx6towgnL9wEcMupvk7EobYquEg5x1WluaEuNM4Y9MFAlxnLMKLh8_XcNhaMTzdlY_Qe2eIbbjZFrW5vbXX3t5pB2gzhBfU9DW70ji23HJuO3hgHDdTTne09b0' }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <LinearGradient colors={['rgba(19,19,19,0.2)', '#131313']} className="absolute inset-0" />
        </ImageBackground>
        <View className="absolute top-12 left-6 z-20">
          <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 bg-black/50 rounded-full items-center justify-center border border-white/20">
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MaterialIcons name="play-circle-outline" size={64} color="rgba(255,255,255,0.8)" />
        </View>
      </View>

      <ScrollView className="flex-1 -mt-6 px-margin relative z-10" showsVerticalScrollIndicator={false}>
         <View className="flex-row items-start justify-between mb-4">
           <View>
             <Text className="font-h1 text-[32px] text-primary">Bench Press</Text>
             <Text className="font-body-md text-secondary">Göğüs • Serbest Ağırlık</Text>
           </View>
           <TouchableOpacity onPress={() => navigation.navigate('AlternativeExercise')} className="flex-row items-center bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant">
             <MaterialIcons name="swap-horiz" size={16} color="#caf300" />
             <Text className="font-label-caps text-primary-fixed ml-1 text-[10px]">DEĞİŞTİR</Text>
           </TouchableOpacity>
         </View>

         <Text className="font-body-md text-on-surface-variant leading-snug mb-8">
           Bench press göğüs, omuz ve arka kol kaslarını hedef alan temel bir itiş hareketidir. Hareketi yaparken bel kavisini korumak ve ayakları sağlam basmak önemlidir.
         </Text>

         <View className="flex-col gap-3 mb-8">
           <Text className="font-h3 text-primary text-[20px] mb-2">Çalışan Kaslar</Text>
           <View className="flex-row items-center gap-4">
             <View className="w-24 h-24 bg-surface-container rounded-xl border border-surface-container-highest items-center justify-center"><Text className="font-label-caps text-secondary text-center">GÖĞÜS (ANA)</Text></View>
             <View className="w-24 h-24 bg-surface-container rounded-xl border border-surface-container-highest items-center justify-center"><Text className="font-label-caps text-secondary text-center">OMUZ (YRD)</Text></View>
             <View className="w-24 h-24 bg-surface-container rounded-xl border border-surface-container-highest items-center justify-center"><Text className="font-label-caps text-secondary text-center">ARKA KOL (YRD)</Text></View>
           </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
