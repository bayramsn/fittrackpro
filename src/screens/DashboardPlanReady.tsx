import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DashboardPlanReady() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-center items-center w-full px-6 h-16 bg-[#121212] border-b border-white/10 z-50">
        <Text className="text-[#D4FF00] font-lexend font-black tracking-tighter text-lg">
          FitTrack Pro
        </Text>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 120 }}>
        {/* Header Section */}
        <View className="flex-col items-center text-center mb-12">
          <View className="w-16 h-16 bg-primary-fixed/10 rounded-full flex items-center justify-center mb-2 border border-primary-fixed/20 shadow-lg shadow-primary-fixed/15">
            <MaterialIcons name="check-circle" size={32} color="#caf300" />
          </View>
          <Text className="font-h1 text-[40px] text-primary mb-1 text-center">Planın hazır 💪</Text>
          <Text className="font-body-md text-[16px] text-on-surface-variant max-w-sm text-center">
            Hedeflerine ulaşman için sana özel bir program oluşturduk.
          </Text>
        </View>

        {/* Dashboard Bento Grid */}
        <View className="flex-col gap-4">
          <View className="flex-row gap-4">
            {/* Nutrition Card */}
            <View className="flex-1 bg-surface-container-low rounded-xl border border-white/10 p-6 flex-col relative overflow-hidden">
              <View className="absolute -top-10 -right-10 w-32 h-32 bg-primary-fixed/5 rounded-full" />

              <View className="flex-row items-center gap-3 mb-6">
                <View className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center border border-white/5">
                  <MaterialIcons name="local-fire-department" size={24} color="#caf300" />
                </View>
                <Text className="font-h3 text-[24px] text-on-surface">Beslenme</Text>
              </View>

              <View className="flex-col gap-3">
                <View className="flex-row justify-between items-end border-b border-white/10 pb-3">
                  <View className="flex-col">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase mb-1">Günlük Kalori</Text>
                    <Text className="font-h2 text-[32px] text-primary">
                      2200 <Text className="font-body-md text-[16px] text-on-surface-variant">kcal</Text>
                    </Text>
                  </View>
                </View>

                <View className="flex-row justify-between items-end pt-1">
                  <View className="flex-col w-full">
                    <View className="flex-row justify-between items-center mb-2">
                      <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Protein Hedefi</Text>
                      <Text className="font-body-md text-[16px] font-bold text-primary">140g</Text>
                    </View>
                    {/* Progress Bar */}
                    <View className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <View className="h-full bg-primary-fixed rounded-full" style={{ width: '75%' }} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Program Card */}
          <View className="w-full bg-surface-container-low rounded-xl border border-white/10 p-6 flex-col relative overflow-hidden h-48">
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz8pvzAeJOAdsH-cazzC_9UHLHFM4CyJox4LVNm1hJiz5Y3tBkvL-tU3r1m1uEqqImgVWKB5MO_4-BiQrxzrAfzdgQvg0MV4li0B-NnOzLweYjN2YtnQjM2815lYzKLJSI5qnJRoNC5mEsffysAnU4rc9xdG6gIU8bOCc9nYk7Mo9APRiOuPApLBfmlMypymIDjUmoQSTw2UnVs-0HL185dMqKY2CcIXybZPO2zalCv0w_z1eCHsb5uebgmD5razO4oogE3pAtDvs" }}
              className="absolute inset-0 w-full h-full opacity-20"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-background/60" />

            <View className="relative z-10 flex-col h-full justify-between">
              <View className="flex-row items-center gap-3 mb-6">
                <View className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center border border-white/5">
                  <MaterialIcons name="fitness-center" size={24} color="#caf300" />
                </View>
                <Text className="font-h3 text-[24px] text-on-surface">Program</Text>
              </View>

              <View>
                <Text className="font-label-caps text-[12px] text-primary-fixed uppercase tracking-widest mb-1">Seçilen Program</Text>
                <Text className="font-h2 text-[32px] text-primary leading-tight">
                  PPL{"\n"}
                  <Text className="font-body-lg text-[18px] text-on-surface-variant">(Push Pull Legs)</Text>
                </Text>
              </View>
            </View>
          </View>

          {/* Calendar Schedule */}
          <View className="w-full bg-surface-container-low rounded-xl border border-white/10 p-6">
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center border border-white/5">
                  <MaterialIcons name="calendar-month" size={24} color="#caf300" />
                </View>
                <Text className="font-h3 text-[24px] text-on-surface">Haftalık Takvim</Text>
              </View>
            </View>

            <View className="flex-col gap-3">
              {/* Monday */}
              <View className="flex-row items-center justify-between p-3 bg-surface-container-high rounded-lg border border-white/5">
                <View className="flex-row items-center gap-3">
                  <View className="w-12 items-center">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">PZT</Text>
                  </View>
                  <View className="w-px h-8 bg-white/10" />
                  <Text className="font-body-lg text-[18px] text-primary font-bold">Push</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={14} color="#c5c9ac" />
              </View>

              {/* Tuesday */}
              <View className="flex-row items-center justify-between p-3 bg-surface-container-high rounded-lg border border-white/5">
                <View className="flex-row items-center gap-3">
                  <View className="w-12 items-center">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">SAL</Text>
                  </View>
                  <View className="w-px h-8 bg-white/10" />
                  <Text className="font-body-lg text-[18px] text-primary font-bold">Pull</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={14} color="#c5c9ac" />
              </View>

              {/* Wednesday */}
              <View className="flex-row items-center justify-between p-3 bg-surface-container-high rounded-lg border border-white/5">
                <View className="flex-row items-center gap-3">
                  <View className="w-12 items-center">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">ÇAR</Text>
                  </View>
                  <View className="w-px h-8 bg-white/10" />
                  <Text className="font-body-lg text-[18px] text-primary font-bold">Legs</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={14} color="#c5c9ac" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom CTA */}
      <View className="absolute bottom-0 left-0 w-full p-5 bg-background z-40 pb-10">
        <TouchableOpacity className="w-full bg-primary-fixed py-4 rounded-full shadow-lg shadow-primary-fixed/20 flex-row items-center justify-center gap-2 active:scale-95">
          <Text className="text-on-primary-fixed font-h3 text-[20px]">Planımı Başlat</Text>
          <MaterialIcons name="rocket-launch" size={24} color="#171e00" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
