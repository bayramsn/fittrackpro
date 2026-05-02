import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function FoodDetailScreen({ navigation }) {
  const [amount, setAmount] = useState('150');

  const baseP = 3.5;
  const baseC = 4.7;
  const baseY = 3.3;
  const baseKcal = 61;

  const multiplier = (parseFloat(amount) || 0) / 100;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Besin Detayı" showBack={true} />

      <ScrollView className="flex-1 px-margin pt-md" showsVerticalScrollIndicator={false}>
         <View className="items-center mb-8">
            <View className="w-24 h-24 rounded-full bg-surface-container-high border border-outline-variant items-center justify-center mb-4">
               <MaterialIcons name="restaurant" size={40} color="#e5e2e1" />
            </View>
            <Text className="font-h2 text-[28px] text-primary">Yoğurt (Tam Yağlı)</Text>
            <Text className="font-body-md text-secondary">Kahvaltı öğününe ekleniyor</Text>
         </View>

         <View className="flex-row items-center justify-center gap-x-4 mb-8">
            <TextInput
               value={amount}
               onChangeText={setAmount}
               keyboardType="numeric"
               className="bg-surface-container h-16 w-32 rounded-xl text-primary font-h2 text-[28px] border border-outline-variant focus:border-primary-fixed text-center"
            />
            <Text className="font-h3 text-secondary text-[24px]">gram</Text>
         </View>

         <View className="bg-surface-container rounded-2xl p-6 border border-[#ffffff10]">
            <Text className="font-h3 text-primary text-[20px] mb-6 text-center">Toplam Besin Değeri</Text>

            <View className="items-center mb-6">
               <Text className="font-h1 text-[48px] text-primary-container leading-none">{Math.round(baseKcal * multiplier)}</Text>
               <Text className="font-label-caps text-secondary mt-1">KCAL</Text>
            </View>

            <View className="flex-row justify-between">
               <View className="items-center flex-1">
                  <Text className="font-h3 text-primary text-[20px] mb-1">{Math.round(baseP * multiplier * 10)/10}g</Text>
                  <Text className="font-label-caps text-secondary text-[10px]">PROTEİN</Text>
                  <View className="w-full h-1 bg-[#8f9378] mt-2 rounded-full" />
               </View>
               <View className="w-[1px] h-full bg-[#ffffff10] mx-4" />
               <View className="items-center flex-1">
                  <Text className="font-h3 text-primary text-[20px] mb-1">{Math.round(baseC * multiplier * 10)/10}g</Text>
                  <Text className="font-label-caps text-secondary text-[10px]">KARBONHİDRAT</Text>
                  <View className="w-full h-1 bg-primary-fixed mt-2 rounded-full" />
               </View>
               <View className="w-[1px] h-full bg-[#ffffff10] mx-4" />
               <View className="items-center flex-1">
                  <Text className="font-h3 text-primary text-[20px] mb-1">{Math.round(baseY * multiplier * 10)/10}g</Text>
                  <Text className="font-label-caps text-secondary text-[10px]">YAĞ</Text>
                  <View className="w-full h-1 bg-error mt-2 rounded-full" />
               </View>
            </View>
         </View>
      </ScrollView>

      <View className="p-6 border-t border-[#ffffff05]">
         <Button title="Öğüne Ekle" onPress={() => navigation.navigate('FoodAddedSuccess')} />
      </View>
    </SafeAreaView>
  );
}
