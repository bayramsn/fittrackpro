import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function EditGoalsNavScreen({ navigation }) {
  const items = [
    { title: "Beslenme Hedefleri", subtitle: "Kalori ve Makrolar", icon: "restaurant" },
    { title: "Antrenman Hedefleri", subtitle: "Gün ve Program", icon: "fitness-center" },
    { title: "Vücut Hedefleri", subtitle: "Hedef Kilo ve Yağ Oranı", icon: "monitor-weight" },
    { title: "Yaşam Kalitesi", subtitle: "Uyku ve Su Takibi", icon: "bedtime" }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Hedeflerim" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md pb-32">
         <Text className="font-body-md text-secondary mb-8">Uygulama deneyimini kişiselleştirmek için hedeflerini güncelle.</Text>
         <View className="flex-col gap-4">
            {items.map((item, idx) => (
              <TouchableOpacity key={idx} className="bg-surface-container rounded-xl p-4 border border-[#ffffff10] flex-row items-center justify-between" onPress={() => navigation.goBack()}>
                 <View className="flex-row items-center gap-4">
                    <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                       <MaterialIcons name={item.icon} size={24} color="#caf300" />
                    </View>
                    <View>
                       <Text className="font-h3 text-primary text-[18px] mb-1">{item.title}</Text>
                       <Text className="font-body-md text-secondary text-[12px]">{item.subtitle}</Text>
                    </View>
                 </View>
                 <MaterialIcons name="chevron-right" size={24} color="#656464" />
              </TouchableOpacity>
            ))}
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
