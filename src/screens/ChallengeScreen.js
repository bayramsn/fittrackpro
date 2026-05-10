import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const challenges = [
  { id: '1', title: '30 Gün Squat', participants: '1.2k', type: 'Alt Vücut', days: '12/30' },
  { id: '2', title: 'Yaz Vücudu 2024', participants: '5.8k', type: 'Tüm Vücut', days: '0/60' },
  { id: '3', title: '100 Push-up', participants: '3.4k', type: 'Kuvvet', days: '5/30' },
];

export default function ChallengeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 mb-6">
        <Text className="text-primary font-h1 text-2xl">Yarışmalar</Text>
        <Text className="text-secondary text-sm">Sınırlarını zorla, rozetleri kazan</Text>
      </View>

      <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
         {challenges.map(ch => (
           <TouchableOpacity key={ch.id} className="bg-surface-container rounded-[32px] overflow-hidden border border-white/5 mb-4">
              <View className="p-6">
                 <View className="flex-row justify-between items-start mb-4">
                    <View>
                       <Text className="text-primary font-h3 text-xl">{ch.title}</Text>
                       <Text className="text-primary-container text-[10px] font-bold mt-1">{ch.type}</Text>
                    </View>
                    <View className="bg-white/5 px-3 py-1 rounded-full flex-row items-center">
                       <MaterialIcons name="groups" size={14} color="#8f9378" />
                       <Text className="text-secondary text-[10px] ml-1">{ch.participants}</Text>
                    </View>
                 </View>

                 <View className="flex-row justify-between items-end">
                    <View className="flex-1 mr-4">
                       <View className="flex-row justify-between mb-2">
                          <Text className="text-on-surface-variant/40 text-[10px]">İlerleme</Text>
                          <Text className="text-secondary text-[10px]">{ch.days} Gün</Text>
                       </View>
                       <View className="h-1.5 bg-background rounded-full overflow-hidden">
                          <View className="h-full bg-primary-container w-[40%]" />
                       </View>
                    </View>
                    <TouchableOpacity className="bg-primary-fixed px-6 py-2 rounded-full">
                       <Text className="text-on-primary-fixed font-bold text-xs">Katıl</Text>
                    </TouchableOpacity>
                 </View>
              </View>
           </TouchableOpacity>
         ))}
         <View className="pb-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
