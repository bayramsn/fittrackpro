import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function NutritionPreferenceScreen({ navigation }) {
  const [preference, setPreference] = useState('high_protein');

  const options = [
    { id: 'balanced', title: 'Dengeli', description: 'Karbonhidrat, protein ve yağ dengeli bir diyet.' },
    { id: 'high_protein', title: 'Yüksek Protein', description: 'Kas gelişimi için protein ağırlıklı beslenme.' },
    { id: 'low_carb', title: 'Düşük Karbonhidrat', description: 'Kilo kontrolü ve yağ yakımı için ideal.' },
    { id: 'vegan', title: 'Vegan / Vejetaryen', description: 'Bitkisel kaynaklı protein ve beslenme.' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-margin pt-md pb-xl">
        <ProgressBar progress={85} />

        <View className="mb-lg mt-sm">
          <Text className="font-h1 text-[36px] text-primary mb-xs">Beslenme tercihin nedir?</Text>
          <Text className="font-body-md text-secondary">Hedefine uygun beslenme planı oluşturmamız için bu bilgi önemlidir.</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
           <View className="flex-col gap-4">
              {options.map((opt) => {
                 const isSelected = preference === opt.id;
                 return (
                    <TouchableOpacity
                       key={opt.id}
                       onPress={() => setPreference(opt.id)}
                       className={`p-md rounded-xl border flex-row items-center ${isSelected ? 'bg-surface-container-high border-primary-fixed' : 'bg-surface-container border-[#ffffff10]'}`}
                    >
                       <View className="flex-1">
                          <Text className={`font-h3 text-[20px] mb-1 ${isSelected ? 'text-primary' : 'text-on-surface'}`}>{opt.title}</Text>
                          <Text className="font-body-md text-secondary text-[14px]">{opt.description}</Text>
                       </View>
                       <View className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 shrink-0 ${isSelected ? 'border-primary-fixed bg-primary-fixed' : 'border-outline-variant'}`}>
                          {isSelected && <MaterialIcons name="check" size={16} color="#171e00" />}
                       </View>
                    </TouchableOpacity>
                 )
              })}
           </View>
        </ScrollView>
      </View>

      <View className="absolute bottom-0 left-0 right-0 p-6 z-50 bg-background border-t border-[#ffffff05]">
         <Button onPress={() => navigation.navigate('SleepScreen')} />
      </View>
    </SafeAreaView>
  );
}
