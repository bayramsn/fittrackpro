import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useApp } from '../context/AppContext';

export default function SubscriptionOfferScreen({ navigation }) {
  const { setOnboardingComplete } = useApp();

  const handleFinish = () => {
    setOnboardingComplete(true);
  };
  const features = [
    'AI Koç ile Sınırsız Mesajlaşma',
    'Kişiye Özel Antrenman ve Beslenme',
    'Kamera ile Form Analizi',
    'Detaylı Gelişim Raporları',
    'Reklamsız Deneyim',
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-margin pt-12">
        <View className="items-center mb-8">
           <View className="w-20 h-20 bg-primary-fixed/20 rounded-3xl items-center justify-center mb-4">
              <MaterialIcons name="auto-awesome" size={48} color="#caf300" />
           </View>
           <Text className="font-h1 text-3xl text-primary text-center">Premium’a Geç</Text>
           <Text className="font-body-lg text-secondary text-center mt-2">Fitness yolculuğunu bir üst seviyeye taşı</Text>
        </View>

        <View className="bg-surface-container p-6 rounded-3xl border border-primary-fixed/30 mb-8">
           {features.map((feature, index) => (
             <View key={index} className="flex-row items-center mb-4">
               <MaterialIcons name="check-circle" size={20} color="#caf300" />
               <Text className="text-primary ml-3 font-medium">{feature}</Text>
             </View>
           ))}
        </View>

        <View className="gap-4">
           <TouchableOpacity className="bg-primary-fixed py-5 rounded-2xl items-center shadow-lg">
              <Text className="text-on-primary-fixed font-bold text-lg">Hemen Başla - 149,99 TL / Ay</Text>
           </TouchableOpacity>

           <TouchableOpacity
             onPress={handleFinish}
             className="py-4 items-center"
            >
              <Text className="text-secondary font-medium">Ücretsiz Sınırlı Sürüm ile Devam Et</Text>
           </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
