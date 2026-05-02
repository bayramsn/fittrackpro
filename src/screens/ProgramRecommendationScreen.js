import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';

export default function ProgramRecommendationScreen({ navigation }) {
  const recommendations = [
    {
      id: 'upper_lower',
      title: 'Upper / Lower',
      days: '3-4 gün',
      focus: 'Dengeli gelişim',
      icon: 'balance',
    },
    {
      id: 'full_body',
      title: 'Full Body',
      days: '2-3 gün',
      focus: 'Başlangıç',
      icon: 'school',
    },
    {
      id: 'bro_split',
      title: 'Bro Split',
      days: '5-6 gün',
      focus: 'Kas bazlı',
      icon: 'sports-martial-arts',
    },
    {
      id: 'hiit',
      title: 'HIIT',
      days: 'Kardiyo odaklı',
      focus: '',
      icon: 'monitor-heart',
    },
    {
      id: 'powerlifting',
      title: 'Powerlifting',
      days: 'Güç odaklı',
      focus: '',
      icon: 'bolt',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background pb-8">
      <TopAppBar showBack={true} />

      <ScrollView className="flex-1 w-full max-w-2xl mx-auto" showsVerticalScrollIndicator={false}>
        <View className="px-margin pt-md">
          <ProgressBar progress={100} />

          <View className="mb-lg">
            <Text className="font-h1 text-[40px] leading-tight text-primary mb-xs">Sana en uygun programı oluşturduk</Text>
            <Text className="font-body-lg text-[18px] text-secondary">Verdiğin bilgilere göre önerilen planlar</Text>
          </View>

          <View className="flex-col gap-4">

            {/* Recommended Card */}
            <View className="bg-surface-container rounded-xl border border-primary-fixed-dim/30 overflow-hidden relative mb-2">
              <View className="absolute top-0 right-0 bg-primary-fixed-dim px-2 py-1 rounded-bl-lg flex-row items-center gap-1 z-10">
                <MaterialIcons name="star" size={14} color="#171e00" />
                <Text className="text-on-primary-fixed font-label-caps text-[12px]">ÖNERİLEN</Text>
              </View>

              <View className="h-32 w-full relative">
                <ImageBackground
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLVU9e8zJXermuOs611JG1qYBolHCKuuNgy1AhhF2aZBodJzcerv-b7NkTTqARGjtxcxJSvgLgNg5bHHCiIZXcUHGngnYoHUFDm6phwsCfTXlPkYC3oi5Z_NhNlghkD9Saswltef6vkwCLNoG2BKx6towgnL9wEcMupvk7EobYquEg5x1WluaEuNM4Y9MFAlxnLMKLh8_XcNhaMTzdlY_Qe2eIbbjZFrW5vbXX3t5pB2gzhBfU9DW70ji23HJuO3hgHDdTTne09b0' }}
                  className="w-full h-full opacity-60"
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={['transparent', '#201f1f']}
                  className="absolute inset-0"
                />
              </View>

              <View className="p-md -mt-10 relative z-10">
                <Text className="font-h3 text-[24px] text-primary mb-xs">Push Pull Legs (PPL)</Text>

                <View className="flex-row gap-2 mb-sm flex-wrap">
                  <View className="flex-row items-center gap-1 bg-surface-container-high px-2 py-1 rounded">
                    <MaterialIcons name="calendar-month" size={14} color="#c8c6c5" />
                    <Text className="text-[12px] font-medium text-secondary">4-6 gün</Text>
                  </View>
                  <View className="flex-row items-center gap-1 bg-surface-container-high px-2 py-1 rounded">
                    <MaterialIcons name="fitness-center" size={14} color="#b0d500" />
                    <Text className="text-[12px] font-medium text-primary-fixed-dim">Kas gelişimi</Text>
                  </View>
                </View>

                <View className="flex-row gap-3 mt-sm">
                  <TouchableOpacity className="flex-1 bg-transparent border border-surface-variant py-3 rounded-full items-center justify-center">
                    <Text className="text-primary font-bold">Detaylar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('MainTabs')}
                    className="flex-1 bg-primary-fixed py-3 rounded-full items-center justify-center shadow-lg"
                    style={{
                      shadowColor: "rgba(202,243,0,0.3)",
                      shadowOffset: { width: 0, height: 0 },
                      shadowOpacity: 1,
                      shadowRadius: 15,
                      elevation: 5,
                    }}
                  >
                    <Text className="text-on-primary-fixed font-bold">Seç</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Other Options */}
            {recommendations.map((rec) => (
              <View key={rec.id} className="bg-surface-container rounded-xl border border-[#ffffff10] overflow-hidden flex-col md:flex-row md:items-center p-md">
                <View className="flex-1 mb-4 md:mb-0">
                  <Text className="font-h3 text-[20px] text-primary mb-xs">{rec.title}</Text>
                  <View className="flex-row gap-2 flex-wrap">
                    {rec.days ? (
                      <View className="flex-row items-center gap-1 bg-surface-container-high px-2 py-1 rounded">
                        <MaterialIcons name={rec.icon} size={14} color="#c8c6c5" />
                        <Text className="text-[12px] font-medium text-secondary">{rec.days}</Text>
                      </View>
                    ) : null}
                    {rec.focus ? (
                      <View className="flex-row items-center gap-1 bg-surface-container-high px-2 py-1 rounded">
                        <Text className="text-[12px] font-medium text-secondary">{rec.focus}</Text>
                      </View>
                    ) : null}
                  </View>
                </View>

                <View className="flex-row gap-2 md:flex-col pt-4 md:pt-0 border-t border-[#ffffff10] md:border-t-0 md:border-l md:w-36 md:items-center md:justify-center">
                  <TouchableOpacity className="flex-1 md:w-full bg-transparent border border-surface-variant py-2 px-4 rounded-full items-center justify-center">
                    <Text className="text-primary font-bold text-[14px]">Detaylar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MainTabs')} className="flex-1 md:w-full bg-surface-container-high border border-[#ffffff10] py-2 px-4 rounded-full items-center justify-center">
                    <Text className="text-primary font-bold text-[14px]">Seç</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
