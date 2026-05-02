import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function BMRInfoScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="BMH Bilgilendirme" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md">
         <View className="items-center mb-8">
            <View className="w-24 h-24 rounded-full bg-[rgba(202,243,0,0.1)] border-2 border-[rgba(202,243,0,0.2)] flex items-center justify-center mb-4">
               <Text className="font-h1 text-[36px] text-primary-fixed">BMH</Text>
            </View>
            <Text className="font-h2 text-[24px] text-primary mb-2">Bazal Metabolizma Hızı</Text>
            <Text className="font-body-md text-secondary text-center leading-snug">Vücudunun tam dinlenme halindeyken (sadece hayatta kalmak için) harcadığı enerji miktarıdır.</Text>
         </View>

         <View className="bg-surface-container rounded-2xl p-6 border border-[#ffffff10] items-center mb-8">
            <Text className="font-label-caps text-secondary mb-2">SENİN TAHMİNİ BMH DEĞERİN</Text>
            <View className="flex-row items-baseline mb-2">
               <Text className="font-h1 text-[48px] text-primary">1850</Text>
               <Text className="font-h3 text-secondary ml-2">kcal / gün</Text>
            </View>
            <Text className="font-body-md text-secondary text-center text-[12px] mt-2">Bu değer; yaş, boy, kilo ve cinsiyet bilgilerine göre hesaplanmıştır.</Text>
         </View>

         <View className="flex-col gap-4">
            <Text className="font-h3 text-primary text-[20px] mb-2">Bu Neden Önemli?</Text>
            <View className="flex-row gap-3">
               <View className="w-2 h-2 rounded-full bg-primary-fixed mt-2" />
               <Text className="flex-1 font-body-md text-secondary leading-snug"><Text className="font-bold text-on-surface">Kilo Vermek İçin:</Text> BMH + Günlük Aktivite harcamandan daha az kalori almalısın (Kalori Açığı).</Text>
            </View>
            <View className="flex-row gap-3">
               <View className="w-2 h-2 rounded-full bg-primary-fixed mt-2" />
               <Text className="flex-1 font-body-md text-secondary leading-snug"><Text className="font-bold text-on-surface">Kas Kazanmak İçin:</Text> BMH + Günlük Aktivite harcamandan biraz daha fazla kalori almalısın (Kalori Fazlası).</Text>
            </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
