import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function GymPanelScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
       <View className="px-margin pt-4 mb-6">
          <Text className="text-primary font-h1 text-2xl">Salon Yönetimi</Text>
          <Text className="text-secondary text-sm">Üye girişi ve salon aktiviteleri</Text>
       </View>

       <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
          <TouchableOpacity className="bg-primary-fixed p-6 rounded-3xl items-center mb-8 shadow-lg">
             <MaterialIcons name="qr-code-scanner" size={48} color="#171e00" />
             <Text className="text-on-primary-fixed font-bold text-lg mt-4">Üye Check-in (QR)</Text>
          </TouchableOpacity>

          <View className="bg-surface-container p-6 rounded-3xl border border-white/5 mb-8">
             <Text className="text-primary font-h3 text-xl mb-4">Doluluk Oranı</Text>
             <View className="flex-row items-end gap-2 h-32 justify-between">
                {[40, 70, 90, 60, 30, 50, 80].map((h, i) => (
                  <View key={i} className="flex-1 bg-primary-fixed/20 rounded-t-lg" style={{ height: `${h}%` }}>
                     {h > 80 && <View className="h-full w-full bg-primary-fixed rounded-t-lg" />}
                  </View>
                ))}
             </View>
             <View className="flex-row justify-between mt-2">
                <Text className="text-on-surface-variant/40 text-[8px]">08:00</Text>
                <Text className="text-on-surface-variant/40 text-[8px]">22:00</Text>
             </View>
          </View>

          <Text className="text-primary font-h3 text-lg mb-4">Aktif Eğitmenler</Text>
          <View className="flex-row gap-4">
             {['Hakan T.', 'Selin V.'].map((name, i) => (
               <View key={i} className="bg-surface-container p-4 rounded-2xl border border-white/5 items-center flex-1">
                  <View className="w-12 h-12 bg-surface-variant rounded-full items-center justify-center mb-2">
                     <MaterialIcons name="person" size={24} color="#fff" />
                  </View>
                  <Text className="text-primary font-bold text-xs">{name}</Text>
                  <Text className="text-primary-container text-[8px] font-bold">Müsait</Text>
               </View>
             ))}
          </View>
          <View className="pb-24" />
       </ScrollView>
    </SafeAreaView>
  );
}
