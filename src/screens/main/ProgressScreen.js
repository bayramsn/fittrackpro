import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function ProgressScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Gelişim" showBack={false} />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
         <View className="px-margin pt-md pb-xl">

           {/* Chart Mock */}
           <View className="mb-lg">
              <View className="flex-row items-center justify-between mb-sm">
                <Text className="font-h3 text-[20px] text-primary">Kilo Takibi</Text>
                <TouchableOpacity className="flex-row items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full">
                   <Text className="font-label-caps text-secondary text-[10px]">SON 1 AY</Text>
                   <MaterialIcons name="arrow-drop-down" size={16} color="#c8c6c5" />
                </TouchableOpacity>
              </View>

              <View className="bg-surface-container h-48 rounded-xl border border-[#ffffff10] items-center justify-center relative overflow-hidden">
                 <View className="absolute bottom-0 w-full h-1/2 bg-[rgba(202,243,0,0.05)] border-t border-[rgba(202,243,0,0.2)]" />
                 <Text className="font-h2 text-surface-variant opacity-30 absolute">Grafik Yükleniyor</Text>
                 {/* Decorative chart lines */}
                 <View className="w-full flex-row items-end justify-around px-4 h-full pb-4 pt-10">
                    <View className="w-2 h-16 bg-surface-container-highest rounded-full"><View className="w-2 h-8 bg-primary-fixed rounded-full absolute bottom-0" /></View>
                    <View className="w-2 h-20 bg-surface-container-highest rounded-full"><View className="w-2 h-10 bg-primary-fixed rounded-full absolute bottom-0" /></View>
                    <View className="w-2 h-14 bg-surface-container-highest rounded-full"><View className="w-2 h-12 bg-primary-fixed rounded-full absolute bottom-0" /></View>
                    <View className="w-2 h-24 bg-surface-container-highest rounded-full"><View className="w-2 h-16 bg-primary-fixed rounded-full absolute bottom-0" /></View>
                    <View className="w-2 h-28 bg-surface-container-highest rounded-full"><View className="w-2 h-24 bg-primary-fixed rounded-full absolute bottom-0" /></View>
                 </View>
              </View>
           </View>

           {/* Metrics Grid */}
           <View className="flex-row flex-wrap justify-between gap-y-4 mb-lg">
              <View className="w-[48%] bg-surface-container p-md rounded-xl border border-[#ffffff10]">
                 <Text className="font-label-caps text-secondary text-[10px] mb-2">GÜNCEL KİLO</Text>
                 <Text className="font-h2 text-primary text-[28px]">74.5<Text className="text-[14px]">kg</Text></Text>
                 <View className="flex-row items-center gap-1 mt-1">
                    <MaterialIcons name="trending-down" size={16} color="#caf300" />
                    <Text className="font-body-md text-primary-fixed text-[12px]">-0.5 kg bu hafta</Text>
                 </View>
              </View>
              <View className="w-[48%] bg-surface-container p-md rounded-xl border border-[#ffffff10]">
                 <Text className="font-label-caps text-secondary text-[10px] mb-2">YAĞ ORANI</Text>
                 <Text className="font-h2 text-primary text-[28px]">%16.2</Text>
                 <View className="flex-row items-center gap-1 mt-1">
                    <MaterialIcons name="trending-down" size={16} color="#caf300" />
                    <Text className="font-body-md text-primary-fixed text-[12px]">-0.3% bu ay</Text>
                 </View>
              </View>
           </View>

           {/* Tools */}
           <View className="mb-lg">
             <Text className="font-h3 text-[20px] text-primary mb-sm">Gelişim Araçları</Text>
             <View className="flex-col gap-3">
               <TouchableOpacity
                  className="bg-surface-container rounded-xl p-4 border border-[#ffffff10] flex-row items-center justify-between"
                  onPress={() => navigation.navigate('BMICalculator')}
               >
                  <View className="flex-row items-center gap-3">
                     <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                        <MaterialIcons name="calculate" size={20} color="#caf300" />
                     </View>
                     <Text className="font-h3 text-primary text-[18px]">Vücut Kitle İndeksi (VKİ)</Text>
                  </View>
                  <MaterialIcons name="chevron-right" size={24} color="#656464" />
               </TouchableOpacity>

               <TouchableOpacity className="bg-surface-container rounded-xl p-4 border border-[#ffffff10] flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                     <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                        <MaterialIcons name="photo-camera" size={20} color="#caf300" />
                     </View>
                     <Text className="font-h3 text-primary text-[18px]">Gelişim Galerisi</Text>
                  </View>
                  <MaterialIcons name="chevron-right" size={24} color="#656464" />
               </TouchableOpacity>

               <TouchableOpacity className="bg-surface-container rounded-xl p-4 border border-[#ffffff10] flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                     <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                        <MaterialIcons name="straighten" size={20} color="#caf300" />
                     </View>
                     <Text className="font-h3 text-primary text-[18px]">Ölçü Ekle</Text>
                  </View>
                  <MaterialIcons name="add" size={24} color="#656464" />
               </TouchableOpacity>
             </View>
           </View>

         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
