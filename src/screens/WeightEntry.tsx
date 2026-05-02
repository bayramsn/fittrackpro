import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function WeightEntry() {
  const navigation = useNavigation();
  const [weight, setWeight] = useState('76.5');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center w-full px-6 h-16 bg-[#121212]/90 border-b border-white/10 z-50">
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
        <View className="mb-6">
          <Text className="font-h2 text-[32px] text-on-background mb-1">Kilo Girişi</Text>
          <Text className="font-body-md text-[16px] text-on-secondary-container">Günlük ilerlemenizi kaydedin.</Text>
        </View>

        {/* Weight Entry Bento Box */}
        <View className="bg-surface-container-low rounded-xl p-6 border border-white/10 shadow-lg mb-6 flex-col items-center justify-center relative overflow-hidden">
          <Text className="font-label-caps text-[12px] text-on-secondary-container uppercase tracking-widest mb-3 z-10">
            Bugünkü Kilonuz
          </Text>
          <View className="flex-row items-baseline gap-1 z-10 border-b-2 border-primary-container pb-1">
            <TextInput
              className="text-center font-h1 text-[40px] text-primary-container min-w-[100px] p-0 m-0"
              keyboardType="decimal-pad"
              value={weight}
              onChangeText={setWeight}
            />
            <Text className="font-h3 text-[24px] text-on-secondary-container">kg</Text>
          </View>

          {/* Save Button */}
          <TouchableOpacity className="mt-6 bg-primary-container py-3 px-10 rounded-full flex-row items-center gap-2 shadow-lg shadow-primary-container/30 active:scale-95">
            <MaterialIcons name="save" size={20} color="#2a3400" />
            <Text className="text-on-primary-container font-label-caps text-[12px] uppercase tracking-widest">
              KAYDET
            </Text>
          </TouchableOpacity>
        </View>

        {/* Trend Line Graph (Visual Rep) */}
        <View className="bg-surface-container rounded-xl p-6 border border-white/10 mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="font-h3 text-[24px] text-on-background">30 Günlük Trend</Text>
            <MaterialIcons name="trending-down" size={24} color="#caf300" />
          </View>

          <View className="h-48 w-full relative justify-end">
            <View className="absolute inset-0 flex-col justify-between py-2 opacity-20">
              <View className="border-b border-on-secondary-container w-full h-px" />
              <View className="border-b border-on-secondary-container w-full h-px" />
              <View className="border-b border-on-secondary-container w-full h-px" />
              <View className="border-b border-on-secondary-container w-full h-px" />
            </View>

            {/* Simulated graph points for React Native */}
            <View className="flex-row justify-between items-end h-full w-full pb-4 px-2">
              <View className="w-2 h-2 rounded-full bg-primary-container mb-[80%]" />
              <View className="w-2 h-2 rounded-full bg-primary-container mb-[70%]" />
              <View className="w-2 h-2 rounded-full bg-primary-container mb-[65%]" />
              <View className="w-2 h-2 rounded-full bg-primary-container mb-[50%]" />
              <View className="w-2 h-2 rounded-full bg-primary-container mb-[45%]" />
              <View className="w-3 h-3 rounded-full bg-tertiary border-2 border-primary-container mb-[40%]" />
            </View>
          </View>

          <View className="flex-row justify-between mt-3">
            <Text className="font-label-caps text-[12px] text-on-secondary-container">1 Eki</Text>
            <Text className="font-label-caps text-[12px] text-on-secondary-container">15 Eki</Text>
            <Text className="font-label-caps text-[12px] text-on-secondary-container">Bugün</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
          <View className="w-[48%] bg-surface-container-high rounded-xl p-4 border border-white/10 flex-col justify-center">
            <Text className="font-label-caps text-[12px] text-on-secondary-container mb-2">Toplam Kayıp</Text>
            <View className="flex-row items-baseline gap-1">
              <Text className="font-h2 text-[32px] text-on-background">-4.5</Text>
              <Text className="font-body-md text-[16px] text-on-secondary-container">kg</Text>
            </View>
          </View>

          <View className="w-[48%] bg-surface-container-high rounded-xl p-4 border border-white/10 flex-col justify-center">
            <Text className="font-label-caps text-[12px] text-on-secondary-container mb-2">Son 7 Gün</Text>
            <View className="flex-row items-baseline gap-1">
              <Text className="font-h2 text-[32px] text-primary-container">-0.8</Text>
              <Text className="font-body-md text-[16px] text-on-secondary-container">kg</Text>
            </View>
          </View>

          <View className="w-full bg-surface-container-high rounded-xl p-4 border border-white/10">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-label-caps text-[12px] text-on-secondary-container">Hedef İlerlemesi (70kg)</Text>
              <Text className="font-label-caps text-[12px] text-primary-container">65%</Text>
            </View>
            <View className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
              <View className="h-full bg-primary-container rounded-full" style={{ width: '65%' }} />
            </View>
          </View>
        </View>

        {/* History List */}
        <View className="bg-surface-container rounded-xl border border-white/10 overflow-hidden">
          <View className="p-4 border-b border-white/10 bg-surface-container-highest">
            <Text className="font-label-caps text-[12px] text-on-secondary-container uppercase">Geçmiş Kayıtlar</Text>
          </View>

          <View className="flex-col">
            <View className="flex-row justify-between items-center p-4 border-b border-white/10">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <MaterialIcons name="calendar-today" size={20} color="#b6b5b4" />
                </View>
                <View className="flex-col">
                  <Text className="font-body-md text-[16px] text-on-background">Bugün</Text>
                  <Text className="font-label-caps text-[12px] text-on-secondary-container">08:30</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="font-h3 text-[24px] text-on-background">76.5 kg</Text>
                <MaterialIcons name="arrow-drop-down" size={20} color="#caf300" />
              </View>
            </View>

            <View className="flex-row justify-between items-center p-4 border-b border-white/10">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <MaterialIcons name="calendar-today" size={20} color="#b6b5b4" />
                </View>
                <View className="flex-col">
                  <Text className="font-body-md text-[16px] text-on-background">Dün</Text>
                  <Text className="font-label-caps text-[12px] text-on-secondary-container">09:15</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="font-h3 text-[24px] text-on-background">76.8 kg</Text>
                <MaterialIcons name="arrow-drop-down" size={20} color="#caf300" />
              </View>
            </View>

            <View className="flex-row justify-between items-center p-4">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <MaterialIcons name="calendar-today" size={20} color="#b6b5b4" />
                </View>
                <View className="flex-col">
                  <Text className="font-body-md text-[16px] text-on-background">28 Eki 2023</Text>
                  <Text className="font-label-caps text-[12px] text-on-secondary-container">07:45</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="font-h3 text-[24px] text-on-background">77.2 kg</Text>
                <MaterialIcons name="arrow-drop-down" size={20} color="#caf300" />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
