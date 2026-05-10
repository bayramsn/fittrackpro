import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useApp } from '../context/AppContext';

export default function ProgressScreen() {
  const { personalRecords, user } = useApp();
  const [activeTab, setActiveTab] = useState('Stats'); // Stats, Photos, Reports

  const renderStats = () => (
    <View className="pb-24">
       {/* Weight Chart Placeholder */}
       <View className="bg-surface-container p-6 rounded-[32px] border border-white/5 mb-8">
          <View className="flex-row justify-between items-center mb-6">
             <View>
                <Text className="text-on-surface-variant/60 font-label-caps text-[10px] mb-1">GÜNCEL KİLO</Text>
                <Text className="text-primary font-h1 text-3xl">75.4 kg</Text>
             </View>
             <View className="bg-primary-fixed/10 px-3 py-1 rounded-full">
                <Text className="text-primary-container font-bold text-xs">-1.2 kg</Text>
             </View>
          </View>
          <View className="h-40 w-full bg-white/5 rounded-2xl items-center justify-center border border-white/5 border-dashed">
             <MaterialIcons name="show-chart" size={48} color="#caf300" opacity={0.2} />
             <Text className="text-on-surface-variant/40 text-xs mt-2">Kilo grafiği burada görünecek</Text>
          </View>
       </View>

       {/* Personal Records */}
       <Text className="text-primary font-h3 text-lg mb-4">Kişisel Rekorlar (PR)</Text>
       <View className="bg-surface-container rounded-3xl border border-white/5 overflow-hidden mb-8">
          {personalRecords.map((pr, index) => (
            <View key={index} className={`p-5 flex-row justify-between items-center ${index !== personalRecords.length - 1 ? 'border-b border-white/5' : ''}`}>
               <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-primary-fixed/10 rounded-xl items-center justify-center mr-4">
                     <MaterialIcons name="workspace-premium" size={20} color="#caf300" />
                  </View>
                  <View>
                     <Text className="text-primary font-bold">{pr.exercise}</Text>
                     <Text className="text-on-surface-variant/40 text-[10px]">{pr.date}</Text>
                  </View>
               </View>
               <Text className="text-primary-container font-h3 text-lg">{pr.value}</Text>
            </View>
          ))}
       </View>

       {/* Body Measurements */}
       <View className="flex-row justify-between items-center mb-4">
          <Text className="text-primary font-h3 text-lg">Vücut Ölçüleri</Text>
          <TouchableOpacity>
             <Text className="text-primary-container font-bold text-xs">Tümünü Gör</Text>
          </TouchableOpacity>
       </View>
       <View className="flex-row gap-4 flex-wrap">
          {[
            { label: 'Bel', val: '82 cm' },
            { label: 'Kol', val: '38 cm' },
            { label: 'Omuz', val: '120 cm' },
            { label: 'Bacak', val: '62 cm' }
          ].map((m, i) => (
            <View key={i} className="bg-surface-container-high p-4 rounded-2xl border border-white/5 w-[47%]">
               <Text className="text-on-surface-variant/60 text-[10px] font-label-caps mb-1">{m.label}</Text>
               <Text className="text-primary font-bold text-base">{m.val}</Text>
            </View>
          ))}
       </View>
    </View>
  );

  const renderReports = () => (
    <View className="pb-24">
       <View className="bg-surface-container p-6 rounded-3xl border border-white/5 mb-6">
          <View className="flex-row items-center mb-4">
             <MaterialIcons name="assessment" size={24} color="#caf300" />
             <Text className="text-primary font-h3 text-xl ml-3">Haftalık Özet</Text>
          </View>
          <Text className="text-secondary text-sm leading-relaxed">
             Bu hafta toplam 4 antrenman tamamladın. Protein hedefini 5 gün tutturdun. Bench Press ağırlığın %5 arttı!
          </Text>
          <LinearGradient colors={['#caf300', '#b0d500']} start={{x:0, y:0}} end={{x:1, y:0}} className="h-1 w-full rounded-full mt-6" />
       </View>

       <TouchableOpacity className="bg-surface-container p-5 rounded-2xl flex-row items-center justify-between border border-white/5 mb-4">
          <View className="flex-row items-center">
             <MaterialIcons name="history" size={24} color="#8f9378" />
             <Text className="text-primary font-medium ml-4">Geçmiş Raporlar</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#666" />
       </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 mb-6">
        <Text className="text-primary font-h1 text-2xl mb-6">Gelişim</Text>

        <View className="flex-row bg-surface-container rounded-2xl p-1 mb-6">
           {[
             { id: 'Stats', label: 'İstatistik' },
             { id: 'Photos', label: 'Fotoğraflar' },
             { id: 'Reports', label: 'Raporlar' }
           ].map((tab) => (
             <TouchableOpacity
               key={tab.id}
               onPress={() => setActiveTab(tab.id)}
               className={`flex-1 py-3 rounded-xl items-center ${activeTab === tab.id ? 'bg-surface-container-high border border-white/5' : ''}`}
             >
                <Text className={`font-bold text-[10px] ${activeTab === tab.id ? 'text-primary' : 'text-secondary'}`}>
                   {tab.label}
                </Text>
             </TouchableOpacity>
           ))}
        </View>
      </View>

      <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
         {activeTab === 'Reports' ? renderReports() : renderStats()}
      </ScrollView>
    </SafeAreaView>
  );
}
