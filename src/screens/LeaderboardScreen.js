import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const rankings = [
  { rank: 1, name: 'Canberk D.', xp: '15,420', trend: 'up' },
  { rank: 2, name: 'Selin K.', xp: '14,850', trend: 'down' },
  { rank: 3, name: 'Ahmet Y.', xp: '12,200', trend: 'up' },
  { rank: 4, name: 'Merve B.', xp: '10,100', trend: 'flat' },
  { rank: 5, name: 'Bayram (Sen)', xp: '1,250', trend: 'up', me: true },
];

export default function LeaderboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 mb-6">
        <Text className="text-primary font-h1 text-2xl">Liderlik Tablosu</Text>
        <View className="flex-row gap-4 mt-4">
           <TouchableOpacity className="bg-primary-fixed px-6 py-2 rounded-full">
              <Text className="text-on-primary-fixed font-bold text-xs">Haftalık</Text>
           </TouchableOpacity>
           <TouchableOpacity className="bg-surface-container px-6 py-2 rounded-full border border-white/5">
              <Text className="text-secondary font-bold text-xs">Aylık</Text>
           </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
         <View className="bg-surface-container rounded-3xl border border-white/5 overflow-hidden">
            {rankings.map((user, index) => (
              <View
                key={index}
                className={`p-5 flex-row items-center justify-between ${user.me ? 'bg-primary-fixed/10' : ''} ${index !== rankings.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                 <View className="flex-row items-center">
                    <Text className={`font-h3 text-lg w-8 ${user.rank <= 3 ? 'text-primary-container' : 'text-on-surface-variant/40'}`}>
                       #{user.rank}
                    </Text>
                    <View className="w-10 h-10 bg-surface-variant rounded-full items-center justify-center mx-3">
                       <MaterialIcons name="person" size={24} color={user.me ? '#caf300' : '#666'} />
                    </View>
                    <Text className={`font-bold ${user.me ? 'text-primary-container' : 'text-primary'}`}>{user.name}</Text>
                 </View>
                 <View className="items-end">
                    <Text className="text-primary font-bold">{user.xp}</Text>
                    <Text className="text-on-surface-variant/40 text-[8px] uppercase">XP</Text>
                 </View>
              </View>
            ))}
         </View>
         <View className="pb-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
