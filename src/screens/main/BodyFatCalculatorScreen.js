import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function BodyFatCalculatorScreen({ navigation }) {
  const [fat] = useState(16.2);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Yağ Oranı Hesaplayıcı" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md">
         <View className="bg-primary-container rounded-2xl p-6 mb-8 border border-[rgba(202,243,0,0.3)] items-center shadow-lg shadow-[rgba(202,243,0,0.2)]">
            <Text className="font-label-caps text-[#596c00] text-[12px] mb-2">TAHMİNİ YAĞ ORANI</Text>
            <View className="flex-row items-baseline mb-2">
               <Text className="font-h1 text-[64px] text-on-primary-container">%{fat}</Text>
            </View>
            <View className="bg-[#171e00] px-3 py-1 rounded-full">
               <Text className="font-label-caps text-primary-fixed">SPORCU SEVİYESİ</Text>
            </View>
         </View>

         <View className="flex-col gap-4">
            <Text className="font-h3 text-primary text-[20px] mb-2">Referans Aralıkları (Erkek)</Text>

            <View className="flex-row items-center justify-between p-3 border-b border-[#ffffff05]">
               <Text className="font-body-md text-secondary">Esansiyel Yağ</Text>
               <Text className="font-h3 text-primary">%2 - %5</Text>
            </View>
            <View className="flex-row items-center justify-between p-3 bg-surface-container-high rounded-xl border border-primary-fixed">
               <Text className="font-body-md text-primary">Sporcu</Text>
               <Text className="font-h3 text-primary-fixed">%6 - %13</Text>
            </View>
            <View className="flex-row items-center justify-between p-3 border-b border-[#ffffff05]">
               <Text className="font-body-md text-secondary">Fitness</Text>
               <Text className="font-h3 text-primary">%14 - %17</Text>
            </View>
            <View className="flex-row items-center justify-between p-3 border-b border-[#ffffff05]">
               <Text className="font-body-md text-secondary">Ortalama</Text>
               <Text className="font-h3 text-primary">%18 - %24</Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
               <Text className="font-body-md text-secondary">Obezite</Text>
               <Text className="font-h3 text-error">%25 ve üzeri</Text>
            </View>
         </View>
      </ScrollView>
      <View className="p-6 border-t border-[#ffffff05]">
        <Button title="Profile Dön" onPress={() => navigation.navigate('MainTabs')} />
      </View>
    </SafeAreaView>
  );
}
