import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const achievements = [
  { id: '1', title: 'Erken Kalkan', desc: '5 gün sabah antrenmanı yap', icon: 'wb-sunny', earned: true, date: '12 Nis 2024' },
  { id: '2', title: 'Su Canavarı', desc: '1 hafta su hedefini tuttur', icon: 'water-drop', earned: true, date: '10 May 2024' },
  { id: '3', title: 'Demir Bilek', desc: '100 kg Bench Press yap', icon: 'fitness-center', earned: false, progress: '80/100' },
  { id: '4', title: 'Yolun Yarısı', desc: '30 gün streak yap', icon: 'local-fire-department', earned: false, progress: '12/30' },
  { id: '5', title: 'Mükemmel Hafta', desc: '7 gün tüm görevleri bitir', icon: 'star', earned: false, progress: '3/7' },
];

export default function AchievementScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
       <View className="px-margin pt-4 mb-6 flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
             <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-primary font-h1 text-2xl ml-4">Başarımlar</Text>
       </View>

       <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between gap-y-4">
             {achievements.map((item) => (
               <View
                key={item.id}
                className={`w-[48%] bg-surface-container p-5 rounded-3xl border border-white/5 items-center ${!item.earned ? 'opacity-50' : ''}`}
               >
                  <View className={`w-16 h-16 rounded-2xl items-center justify-center mb-4 ${item.earned ? 'bg-primary-fixed/20' : 'bg-surface-variant'}`}>
                     <MaterialIcons name={item.icon} size={32} color={item.earned ? '#caf300' : '#8f9378'} />
                  </View>
                  <Text className="text-primary font-bold text-center mb-1">{item.title}</Text>
                  <Text className="text-on-surface-variant/60 text-[10px] text-center mb-3">{item.desc}</Text>

                  {item.earned ? (
                    <Text className="text-primary-container text-[8px] font-bold uppercase">{item.date}</Text>
                  ) : (
                    <View className="w-full">
                       <View className="h-1 bg-background rounded-full overflow-hidden">
                          <View className="h-full bg-primary-container" style={{ width: '40%' }} />
                       </View>
                       <Text className="text-on-surface-variant/40 text-[8px] mt-1 text-center font-bold">{item.progress}</Text>
                    </View>
                  )}
               </View>
             ))}
          </View>
          <View className="pb-24" />
       </ScrollView>
    </SafeAreaView>
  );
}
