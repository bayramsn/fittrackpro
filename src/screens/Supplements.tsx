import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Supplements() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center w-full px-6 h-16 bg-[#121212]/90 border-b border-transparent z-50">
        <TouchableOpacity
          className="w-10 h-10 rounded-full flex items-center justify-center active:scale-95 transition-all"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="font-lexend font-bold tracking-tight text-lg text-white">
          FitTrack Pro
        </Text>
        <View className="w-10 h-10" />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 100 }}>

        {/* Header Section */}
        <View className="flex-col gap-1 mb-10">
          <Text className="font-h2 text-[32px] text-on-surface">Günlük Takviyelerim</Text>
          <Text className="font-body-md text-[16px] text-on-surface-variant">Bugün için planlanan 4 takviye</Text>
        </View>

        {/* Supplement Cards List */}
        <View className="flex-col gap-3">

          {/* Card 1 */}
          <TouchableOpacity className="bg-surface-container rounded-xl p-4 border border-outline-variant/30 flex-row items-center justify-between relative overflow-hidden active:scale-95">
            <View className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
            <View className="flex-row items-center gap-4 pl-2">
              <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/50">
                <MaterialIcons name="water-drop" size={24} color="#caf300" />
              </View>
              <View>
                <Text className="font-h3 text-[20px] text-on-surface">Whey Protein</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant mt-1">
                  <Text className="text-on-surface font-bold">1 Ölçek</Text> • Antrenman Sonrası
                </Text>
              </View>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest border border-outline-variant/50">
              <MaterialIcons name="notifications" size={20} color="#b6b5b4" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity className="bg-surface-container rounded-xl p-4 border border-outline-variant/30 flex-row items-center justify-between relative overflow-hidden active:scale-95">
            <View className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
            <View className="flex-row items-center gap-4 pl-2">
              <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/50">
                <MaterialIcons name="bolt" size={24} color="#caf300" />
              </View>
              <View>
                <Text className="font-h3 text-[20px] text-on-surface">Kreatin</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant mt-1">
                  <Text className="text-on-surface font-bold">5g</Text> • Sabah
                </Text>
              </View>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest border border-outline-variant/50">
              <MaterialIcons name="notifications" size={20} color="#b6b5b4" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity className="bg-surface-container rounded-xl p-4 border border-outline-variant/30 flex-row items-center justify-between relative overflow-hidden active:scale-95">
            <View className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
            <View className="flex-row items-center gap-4 pl-2">
              <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/50">
                <MaterialIcons name="medication" size={24} color="#caf300" />
              </View>
              <View>
                <Text className="font-h3 text-[20px] text-on-surface">Omega 3</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant mt-1">
                  <Text className="text-on-surface font-bold">2 Kapsül</Text> • Kahvaltı ile
                </Text>
              </View>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest border border-outline-variant/50">
              <MaterialIcons name="notifications" size={20} color="#b6b5b4" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity className="bg-surface-container rounded-xl p-4 border border-outline-variant/30 flex-row items-center justify-between relative overflow-hidden active:scale-95">
            <View className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
            <View className="flex-row items-center gap-4 pl-2">
              <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/50">
                <MaterialIcons name="bedtime" size={24} color="#caf300" />
              </View>
              <View>
                <Text className="font-h3 text-[20px] text-on-surface">Magnezyum</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant mt-1">
                  <Text className="text-on-surface font-bold">1 Tablet</Text> • Gece
                </Text>
              </View>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest border border-outline-variant/50">
              <MaterialIcons name="notifications" size={20} color="#b6b5b4" />
            </TouchableOpacity>
          </TouchableOpacity>

        </View>

        {/* Add Button */}
        <View className="mt-10 pt-4">
          <TouchableOpacity
            className="w-full bg-primary-fixed py-4 rounded-full flex-row items-center justify-center gap-2 shadow-lg shadow-primary-fixed/20 active:scale-95"
            onPress={() => navigation.navigate('AddSupplement' as never)}
          >
            <MaterialIcons name="add" size={24} color="#171e00" />
            <Text className="text-on-primary-fixed font-label-caps text-[12px] uppercase">
              Yeni Takviye Ekle
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
