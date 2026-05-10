import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PoseDetectionResultScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
       <View className="px-margin pt-12 items-center">
          <Text className="text-primary font-h1 text-2xl mb-8">Form Analizi Sonucu</Text>

          <View className="w-full h-80 bg-surface-container rounded-3xl overflow-hidden border border-primary-fixed/30 mb-8">
             <Image source={require('../../assets/images/placeholder.png')} className="w-full h-full opacity-40" />
             <View className="absolute inset-0 items-center justify-center">
                <MaterialIcons name="analytics" size={64} color="#caf300" />
             </View>
          </View>

          <View className="w-full gap-4">
             <View className="bg-surface-container p-5 rounded-2xl border border-white/5 flex-row items-center justify-between">
                <Text className="text-secondary">Doğru Form Oranı</Text>
                <Text className="text-primary-container font-bold">%92</Text>
             </View>
             <View className="bg-surface-container p-5 rounded-2xl border border-white/5">
                <Text className="text-primary font-bold mb-2">AI Önerisi</Text>
                <Text className="text-secondary text-sm">Harika bir derinlik! Ancak iniş sırasında sırtını biraz daha dik tutmaya çalış.</Text>
             </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('MainTabs')}
            className="w-full bg-primary-fixed py-5 rounded-2xl items-center mt-12 shadow-lg"
          >
             <Text className="text-on-primary-fixed font-bold text-lg">Antrenmana Dön</Text>
          </TouchableOpacity>
       </View>
    </SafeAreaView>
  );
}
