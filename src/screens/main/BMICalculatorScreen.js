import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function BMICalculatorScreen({ navigation }) {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(180);

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

  const getStatus = (bmiValue) => {
    if (bmiValue < 18.5) return { status: 'Zayıf', color: '#8f9378', text: 'Kilo almanız önerilir.' };
    if (bmiValue >= 18.5 && bmiValue < 24.9) return { status: 'Normal', color: '#caf300', text: 'Harika, ideal kilodasınız!' };
    if (bmiValue >= 25 && bmiValue < 29.9) return { status: 'Fazla Kilolu', color: '#c5c9ac', text: 'Biraz kilo vermeniz önerilir.' };
    return { status: 'Obez', color: '#ffb4ab', text: 'Doktora danışmanız önerilir.' };
  };

  const currentStatus = getStatus(bmi);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="VKİ Hesaplayıcı" />

      <ScrollView className="flex-1 px-margin py-md">
         <View className="bg-surface-container rounded-2xl p-6 mb-8 border border-[#ffffff10] items-center">
            <Text className="font-label-caps text-secondary text-[12px] mb-2">VÜCUT KİTLE İNDEKSİ</Text>
            <View className="relative w-48 h-48 rounded-full border-8 border-surface-container-high flex items-center justify-center mb-4 overflow-hidden">
               <View className="absolute bottom-0 w-full h-1/2 bg-[rgba(202,243,0,0.1)]" />
               <View className="absolute bottom-1/2 w-full h-1 bg-primary-fixed" style={{transform: [{rotate: `${(bmi - 15) * 6 - 90}deg`}], transformOrigin: 'bottom center'}} />

               <Text className="font-h1 text-[64px] text-primary">{bmi}</Text>
               <View className="bg-surface-container-highest px-3 py-1 rounded-full mt-2">
                 <Text className="font-label-caps" style={{color: currentStatus.color}}>{currentStatus.status}</Text>
               </View>
            </View>
            <Text className="font-body-md text-secondary text-center">{currentStatus.text}</Text>
         </View>

         {/* Inputs Mock */}
         <View className="flex-col gap-4">
            <View className="bg-surface-container p-4 rounded-xl border border-surface-container-highest flex-row items-center justify-between">
               <View className="flex-row items-center gap-3">
                  <MaterialIcons name="monitor-weight" size={24} color="#656464" />
                  <View>
                     <Text className="font-label-caps text-secondary text-[10px]">KİLO (KG)</Text>
                     <Text className="font-h3 text-primary text-[20px]">{weight}</Text>
                  </View>
               </View>
               <View className="flex-row items-center gap-2">
                  <TouchableOpacity onPress={() => setWeight(w => w - 1)} className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center"><MaterialIcons name="remove" size={20} color="#e5e2e1" /></TouchableOpacity>
                  <TouchableOpacity onPress={() => setWeight(w => w + 1)} className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center"><MaterialIcons name="add" size={20} color="#e5e2e1" /></TouchableOpacity>
               </View>
            </View>

            <View className="bg-surface-container p-4 rounded-xl border border-surface-container-highest flex-row items-center justify-between">
               <View className="flex-row items-center gap-3">
                  <MaterialIcons name="height" size={24} color="#656464" />
                  <View>
                     <Text className="font-label-caps text-secondary text-[10px]">BOY (CM)</Text>
                     <Text className="font-h3 text-primary text-[20px]">{height}</Text>
                  </View>
               </View>
               <View className="flex-row items-center gap-2">
                  <TouchableOpacity onPress={() => setHeight(h => h - 1)} className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center"><MaterialIcons name="remove" size={20} color="#e5e2e1" /></TouchableOpacity>
                  <TouchableOpacity onPress={() => setHeight(h => h + 1)} className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center"><MaterialIcons name="add" size={20} color="#e5e2e1" /></TouchableOpacity>
               </View>
            </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
