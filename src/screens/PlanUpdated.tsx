import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanUpdated() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background justify-center items-center px-5 py-10">
      <StatusBar barStyle="light-content" />

      {/* Main Content Canvas */}
      <View className="w-full max-w-[400px] flex-col items-center flex-1 justify-center gap-6">

        {/* Success Icon */}
        <View className="relative w-32 h-32 flex items-center justify-center mb-3">
          <View className="absolute inset-0 bg-primary-container rounded-full opacity-20" />
          <View className="w-24 h-24 rounded-full bg-surface-container-high border border-outline/30 flex items-center justify-center z-10 shadow-lg shadow-primary-container/15">
            <MaterialIcons name="check-circle" size={56} color="#D4FF00" />
          </View>
        </View>

        {/* Typography */}
        <View className="text-center flex-col gap-3 w-full items-center">
          <Text className="font-h1 text-[40px] text-on-surface text-center">Planın Optimize Edildi</Text>
          <Text className="font-body-lg text-[18px] text-on-surface-variant max-w-[320px] text-center">
            Bugünkü erteleme kararına göre programını güncelledik. Yarın kaldığın yerden daha güçlü devam edeceksin.
          </Text>
        </View>

        {/* Summary Card */}
        <View className="w-full bg-surface-container-low border border-outline/20 rounded-xl p-6 flex-col gap-3 shadow-sm mt-6">
          <View className="flex-row items-start gap-3">
            <View className="mt-1">
              <MaterialIcons name="self-improvement" size={20} color="#D4FF00" />
            </View>
            <View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase mb-1">Yeni Odak</Text>
              <Text className="font-body-md text-[16px] text-on-surface font-bold">Dinlenme ve Toparlanma</Text>
            </View>
          </View>

          <View className="h-px bg-outline/20 w-full my-1" />

          <View className="flex-row items-start gap-3">
            <View className="mt-1">
              <MaterialIcons name="fitness-center" size={20} color="#D4FF00" />
            </View>
            <View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase mb-1">Yarınki Antrenman</Text>
              <Text className="font-body-md text-[16px] text-on-surface font-bold">İtme (Push) Günü</Text>
            </View>
          </View>

          <View className="h-px bg-outline/20 w-full my-1" />

          <View className="flex-row items-start gap-3">
            <View className="mt-1">
              <MaterialIcons name="lightbulb" size={20} color="#D4FF00" />
            </View>
            <View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase mb-1">Öneri</Text>
              <Text className="font-body-md text-[16px] text-on-surface">Bol su iç ve protein alımına dikkat et.</Text>
            </View>
          </View>
        </View>

      </View>

      {/* Bottom Action Area */}
      <View className="w-full max-w-[400px] mt-auto pt-10">
        <TouchableOpacity
          className="w-full h-14 bg-primary text-black rounded-full flex-row items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
          onPress={() => navigation.navigate('MainTabs' as never)}
        >
          <Text className="font-lexend font-bold text-[14px] text-black uppercase">
            ANA SAYFAYA DÖN
          </Text>
          <MaterialIcons name="arrow-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
