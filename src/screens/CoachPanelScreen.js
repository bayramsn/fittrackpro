import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const clients = [
  { id: '1', name: 'Mert H.', status: 'Aktif', program: 'Hypertrophy V2', adherence: '92%' },
  { id: '2', name: 'Ayşe K.', status: 'Aktif', program: 'Fat Loss', adherence: '85%' },
  { id: '3', name: 'Deniz S.', status: 'Beklemede', program: '-', adherence: '0%' },
];

export default function CoachPanelScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
       <View className="px-margin pt-4 mb-6">
          <Text className="text-primary font-h1 text-2xl">Koç Paneli</Text>
          <Text className="text-secondary text-sm">Öğrencilerini ve programlarını yönet</Text>
       </View>

       <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
          {/* Stats */}
          <View className="flex-row gap-4 mb-8">
             <View className="flex-1 bg-surface-container p-4 rounded-3xl border border-white/5">
                <Text className="text-primary font-bold text-xl">12</Text>
                <Text className="text-on-surface-variant/60 text-[10px] uppercase">Öğrenci</Text>
             </View>
             <View className="flex-1 bg-surface-container p-4 rounded-3xl border border-white/5">
                <Text className="text-primary font-bold text-xl">₺4.2k</Text>
                <Text className="text-on-surface-variant/60 text-[10px] uppercase">Aylık Gelir</Text>
             </View>
          </View>

          <Text className="text-primary font-h3 text-lg mb-4">Öğrencilerim</Text>
          <View className="bg-surface-container rounded-3xl border border-white/5 overflow-hidden">
             {clients.map((client, index) => (
               <TouchableOpacity key={client.id} className={`p-5 flex-row items-center justify-between ${index !== clients.length - 1 ? 'border-b border-white/5' : ''}`}>
                  <View className="flex-row items-center">
                     <View className="w-10 h-10 bg-surface-variant rounded-full items-center justify-center mr-3">
                        <MaterialIcons name="person" size={24} color="#fff" />
                     </View>
                     <View>
                        <Text className="text-primary font-bold">{client.name}</Text>
                        <Text className="text-on-surface-variant/40 text-[10px]">{client.program}</Text>
                     </View>
                  </View>
                  <View className="items-end">
                     <Text className="text-primary-container font-bold text-xs">{client.adherence}</Text>
                     <Text className="text-on-surface-variant/40 text-[8px] uppercase">Uyum</Text>
                  </View>
               </TouchableOpacity>
             ))}
          </View>
          <View className="pb-24" />
       </ScrollView>
    </SafeAreaView>
  );
}
