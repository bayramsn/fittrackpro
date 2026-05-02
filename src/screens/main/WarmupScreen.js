import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function WarmupScreen({ navigation }) {
  const exercises = [
    { title: "Kol Çevirme", duration: "30sn", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMfV_LjWfXZ3iRvtVqVymzPRlrWDlHelxyEpBQS6J8aiuwqpH5a4Omfbbh6rUb0aEkbD8GZgDFTkAv8nDgW672nNq9ntkRPwn8WYIMrzbk0WSdG1F_EdB6QE18dn1gKD0R1zIZZDuBdbVs_0Zkq-pAfx_MKXYbWEq9Y3AA8X4eg681UbARpZ-ifGlHr0AMRbNI8bAwPy3s0ffk5ze_l5E59wAEUCMsqKLJ2Cp-pElUfNC0SnQeGCwX1bWZhCq3SfGUSrewiQcZr5g" },
    { title: "Göğüs Açma", duration: "30sn", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-3J7imio2j4KCYwMnPtTZenLBZZ-NOJONaPIrY_LvUn3WUpNfOWf17AmXv6uOvOdJd8hgoL9w71BiyUFxfkHhG_znfwNvj7kLf__gvQJZ2belcNybnrFoQdTBsD9YQCXR0kaXGuCoezhxBv9ZGUUtwBI8PlAuh4FZk72VSzDDCN97hEHXmKOhy4Yu7kDdBSE6nysVbEoAE32x0ypJFpQtJMZzTKoGMQnROcDp_qG1aUked3UXiWW_CcDbCZ2ORlWWhb03gzy1CA8" }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Isınma Hareketleri" showBack={true} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
         <View className="px-margin pt-md pb-32">
           <Text className="font-h2 text-[24px] text-primary mb-4">Antrenmana Hazırlık (5 dk)</Text>

           <View className="flex-col gap-4">
              {exercises.map((item, idx) => (
                 <TouchableOpacity key={idx} className="flex-row items-center p-3 rounded-xl border border-surface-container-highest bg-surface-container">
                    <Image source={{uri: item.image}} className="w-16 h-16 rounded-lg mr-4 opacity-80" />
                    <View className="flex-1">
                       <Text className="font-h3 text-primary text-[18px]">{item.title}</Text>
                       <Text className="font-body-md text-secondary">{item.duration}</Text>
                    </View>
                    <MaterialIcons name="play-circle-outline" size={28} color="#caf300" />
                 </TouchableOpacity>
              ))}
           </View>
         </View>
      </ScrollView>
      <View className="p-6 border-t border-[#ffffff05]">
        <Button title="Isınmayı Bitir" onPress={() => navigation.navigate('ActiveWorkout')} />
      </View>
    </SafeAreaView>
  );
}
