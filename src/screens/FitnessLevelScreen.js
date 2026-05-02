import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function FitnessLevelScreen({ navigation }) {
  const [fitnessLevel, setFitnessLevel] = useState('intermediate');

  const options = [
    { id: 'beginner', title: 'Başlangıç', description: 'Yeni başlıyorum, temel hareketleri ve formları öğrenmek istiyorum.', icon: 'signal-cellular-alt-1-bar' },
    { id: 'intermediate', title: 'Orta', description: 'Düzenli spor yapıyorum, kondisyonumu artırıp sınırlarımı zorlamak istiyorum.', icon: 'signal-cellular-alt-2-bar' },
    { id: 'advanced', title: 'İleri', description: 'Deneyimliyim, yüksek yoğunluklu ve teknik antrenmanlar arıyorum.', icon: 'signal-cellular-alt' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background relative">
      <View className="absolute top-0 left-0 w-full h-[353px] z-0 opacity-20 pointer-events-none">
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE6yU5FvccK__XFD4mRD9GrH02OhUhIN9io27tAzV2l7_kAquLpb8yeipBdjWCq8eUTaJj5nP_7gh8QJAlRzNHCuecu8EZWwqpAzCXdUZjiaT2FOrnpk9AlKbnuisppG2fKI5VKLBkVUUO8Aid9TVt9sZW_fBDkH0twdxjzI9e_tj_ySvBto7ga0AkA_DZcIOCvRe4MaBJQIcApVmNOW2dMhSsjUIqhMCE7a_FZcNgSl8mLVl_sw4XA1jh6WMqVduby21g4VbWTg8' }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <LinearGradient
            colors={['transparent', '#131313']}
            className="absolute inset-0"
          />
        </ImageBackground>
      </View>

      <TopAppBar />

      <View className="flex-1 px-6 pt-md pb-[120px] relative z-10 w-full max-w-2xl mx-auto">
        <ProgressBar progress={25} />

        <View className="mb-lg">
          <Text className="font-h2 text-[32px] text-on-surface mb-xs leading-tight">Spor seviyen nedir?</Text>
          <Text className="font-body-md text-[16px] text-on-surface-variant">Sana en uygun antrenman programını oluşturabilmemiz için mevcut fitness deneyimini seç.</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-col gap-sm pb-12">
            {options.map((option) => {
              const isSelected = fitnessLevel === option.id;

              return (
                <TouchableOpacity
                  key={option.id}
                  activeOpacity={0.8}
                  onPress={() => setFitnessLevel(option.id)}
                  className={`relative flex-row items-center p-md rounded-xl border mb-4 overflow-hidden ${
                    isSelected
                      ? 'bg-surface-container border-primary-fixed'
                      : 'bg-surface-container-low border-surface-container-highest'
                  }`}
                  style={isSelected ? {
                    shadowColor: "rgba(202,243,0,0.05)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 1,
                    shadowRadius: 20,
                    elevation: 5,
                  } : {}}
                >
                  {isSelected && (
                    <View className="absolute inset-0 bg-primary-fixed opacity-5 pointer-events-none" />
                  )}

                  <View className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center mr-md relative z-10 ${
                    isSelected ? 'bg-primary-fixed' : 'bg-surface-container-highest'
                  }`}>
                    <MaterialIcons
                      name={option.icon}
                      size={24}
                      color={isSelected ? '#171e00' : '#e5e2e1'}
                    />
                  </View>

                  <View className="flex-1 relative z-10">
                    <Text className="font-h3 text-[20px] text-on-surface mb-1">{option.title}</Text>
                    <Text className="font-body-md text-[14px] text-on-surface-variant leading-snug">{option.description}</Text>
                  </View>

                  <View className={`w-6 h-6 shrink-0 rounded-full border-2 ml-md flex items-center justify-center relative z-10 ${
                    isSelected ? 'border-primary-fixed bg-primary-fixed' : 'border-outline-variant'
                  }`}>
                    {isSelected && (
                      <View className="w-2.5 h-2.5 rounded-full bg-on-primary-fixed" />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 p-6 pt-12 z-50"
      >
        <Button onPress={() => navigation.navigate('SleepScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
