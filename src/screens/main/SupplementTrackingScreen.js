import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function SupplementTrackingScreen({ navigation }) {
  const supplements = [
    { title: "Whey Protein", time: "Antrenman Sonrası", amount: "1 Ölçek", icon: "science", isTaken: true },
    { title: "Kreatin", time: "Sabah", amount: "5g", icon: "bolt", isTaken: true },
    { title: "Omega 3", time: "Akşam Yemeği", amount: "2 Kapsül", icon: "medication", isTaken: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Takviye Takibi" showBack={true} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
         <View className="px-margin pt-md pb-32">

           <View className="mb-lg flex-row justify-between items-end">
              <View>
                 <Text className="font-h2 text-[28px] text-primary">Günlük Takviyeler</Text>
                 <Text className="font-body-md text-secondary">2 / 3 alındı</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('AddSupplement')} className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center">
                 <MaterialIcons name="add" size={24} color="#171e00" />
              </TouchableOpacity>
           </View>

           <View className="flex-col gap-4">
              {supplements.map((item, idx) => (
                 <View key={idx} className={`p-4 rounded-xl border flex-row items-center justify-between ${item.isTaken ? 'bg-[rgba(202,243,0,0.05)] border-[rgba(202,243,0,0.2)]' : 'bg-surface-container border-[#ffffff10]'}`}>
                    <View className="flex-row items-center gap-4">
                       <View className={`w-12 h-12 rounded-full flex items-center justify-center ${item.isTaken ? 'bg-[rgba(202,243,0,0.1)]' : 'bg-surface-container-high'}`}>
                          <MaterialIcons name={item.icon} size={24} color={item.isTaken ? "#caf300" : "#e5e2e1"} />
                       </View>
                       <View>
                          <Text className={`font-h3 text-[18px] mb-1 ${item.isTaken ? 'text-primary' : 'text-on-surface'}`}>{item.title}</Text>
                          <Text className="font-body-md text-[12px] text-secondary">{item.time} • {item.amount}</Text>
                       </View>
                    </View>
                    <TouchableOpacity className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${item.isTaken ? 'border-primary-fixed bg-primary-fixed' : 'border-outline-variant bg-transparent'}`}>
                       {item.isTaken && <MaterialIcons name="check" size={16} color="#171e00" />}
                    </TouchableOpacity>
                 </View>
              ))}
           </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
