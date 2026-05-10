import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AdminPanelScreen({ navigation }) {
  const stats = [
    { label: 'Aktif Kullanıcı', value: '1.2k', icon: 'people' },
    { label: 'Aylık Ciro', value: '₺85k', icon: 'payments' },
    { label: 'Dönüşüm', value: '%12', icon: 'trending-up' },
    { label: 'Destek', value: '4', icon: 'support-agent' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
       <View className="px-margin pt-4 mb-6">
          <Text className="text-primary font-h1 text-2xl">Yönetim Paneli</Text>
          <Text className="text-secondary text-sm">Sistem özeti ve ayarlar</Text>
       </View>

       <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between gap-y-4 mb-8">
             {stats.map((stat, i) => (
               <View key={i} className="w-[48%] bg-surface-container p-5 rounded-3xl border border-white/5">
                  <MaterialIcons name={stat.icon} size={24} color="#caf300" />
                  <Text className="text-primary font-bold text-2xl mt-4">{stat.value}</Text>
                  <Text className="text-on-surface-variant/60 text-[10px] uppercase font-bold">{stat.label}</Text>
               </View>
             ))}
          </View>

          <Text className="text-primary font-h3 text-lg mb-4">Hızlı Erişim</Text>
          <View className="bg-surface-container rounded-3xl border border-white/5 overflow-hidden">
             {[
               { label: 'Kullanıcıları Yönet', icon: 'manage-accounts' },
               { label: 'Egzersiz Veritabanı', icon: 'fitness-center' },
               { label: 'Abonelik Paketleri', icon: 'card-membership' },
               { label: 'Sistem Logları', icon: 'list-alt' },
             ].map((item, index) => (
               <TouchableOpacity key={index} className={`p-5 flex-row items-center justify-between ${index !== 3 ? 'border-b border-white/5' : ''}`}>
                  <View className="flex-row items-center">
                     <MaterialIcons name={item.icon} size={24} color="#8f9378" />
                     <Text className="text-primary font-medium ml-4">{item.label}</Text>
                  </View>
                  <MaterialIcons name="chevron-right" size={24} color="#666" />
               </TouchableOpacity>
             ))}
          </View>
          <View className="pb-24" />
       </ScrollView>
    </SafeAreaView>
  );
}
