import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../components/TopAppBar';
import Button from '../components/Button';

export default function PlanSummaryScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Plan Özeti" showBack={true} />

      <ScrollView className="flex-1 px-margin pt-md pb-32" showsVerticalScrollIndicator={false}>
         <View className="mb-lg">
            <Text className="font-h1 text-[40px] text-primary mb-xs leading-tight">İşte Planın Hazır!</Text>
            <Text className="font-body-lg text-secondary">Hedeflerine ulaşman için sana özel oluşturduğumuz programın özeti.</Text>
         </View>

         {/* Summary Cards */}
         <View className="flex-col gap-4">
            <View className="bg-surface-container rounded-xl p-md border border-[#ffffff10] flex-row items-center gap-4">
               <View className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                  <MaterialIcons name="local-fire-department" size={24} color="#596c00" />
               </View>
               <View>
                  <Text className="font-label-caps text-secondary mb-1">GÜNLÜK KALORİ HEDEFİ</Text>
                  <Text className="font-h2 text-primary-fixed text-[24px]">2450 <Text className="text-[14px]">kcal</Text></Text>
               </View>
            </View>

            <View className="bg-surface-container rounded-xl p-md border border-[#ffffff10] flex-row items-center gap-4">
               <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                  <MaterialIcons name="calendar-today" size={24} color="#caf300" />
               </View>
               <View>
                  <Text className="font-label-caps text-secondary mb-1">HAFTALIK ANTRENMAN</Text>
                  <Text className="font-h3 text-primary text-[20px]">4 Gün / Haftada</Text>
               </View>
            </View>

            <View className="bg-surface-container rounded-xl p-md border border-[#ffffff10] flex-row items-center gap-4">
               <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                  <MaterialIcons name="restaurant" size={24} color="#caf300" />
               </View>
               <View>
                  <Text className="font-label-caps text-secondary mb-1">BESLENME TERCİHİ</Text>
                  <Text className="font-h3 text-primary text-[20px]">Yüksek Protein</Text>
               </View>
            </View>

            <View className="bg-surface-container rounded-xl p-md border border-[#ffffff10] flex-row items-center gap-4">
               <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                  <MaterialIcons name="fitness-center" size={24} color="#caf300" />
               </View>
               <View>
                  <Text className="font-label-caps text-secondary mb-1">PROGRAM TİPİ</Text>
                  <Text className="font-h3 text-primary text-[20px]">Push Pull Legs (PPL)</Text>
               </View>
            </View>
         </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-background border-t border-[#ffffff05]">
         <Button title="Kaydet ve Başla" onPress={() => navigation.navigate('RegisterScreen')} />
      </View>
    </SafeAreaView>
  );
}
