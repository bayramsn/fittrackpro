import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ActiveWorkout() {
  const navigation = useNavigation();
  const [reps, setReps] = useState('10');
  const [weight, setWeight] = useState('80');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center w-full px-6 h-16 bg-[#121212] border-b border-white/10 z-50">
        <TouchableOpacity
          className="w-12 h-12 rounded-full flex items-center justify-center active:scale-95 transition-all"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#71717a" />
        </TouchableOpacity>
        <Text className="font-lexend font-bold text-lg uppercase tracking-tight text-[#D4FF00] flex-1 text-center">
          Günün Antrenmanı
        </Text>
        <View className="w-12" />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 100 }}>

        {/* Video Placeholder / Header Image */}
        <View className="w-full aspect-video bg-surface-container-high rounded-xl overflow-hidden relative shadow-lg mb-6">
          <ImageBackground
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6azUdT6We2kdV_j9dg-UiCktTfyyRYcyLwAlhyBxLX62w2sd58hf9lIZk5bUKk4w5v1eiBAwX5gUk2-rR-PmlxQ9_MHzmI4rBHlVfnGki-Tcr0jtZS5aVW3kV3yqSSMfsX9DM1wR0hGSOz81YOYVoBhxe5E8OYJdq7nKot8fPdP8eiNXmcrTE_zE8cQ3zx14dYbRgefhyoxyCeU7oY_5dc3DSgPVAxCgxSFutmLV6fGQYl-zPXx55WuE1esOVan0Se3yTsSTsuk0" }}
            className="absolute inset-0 opacity-80"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-center justify-center">
            <TouchableOpacity className="w-16 h-16 rounded-full bg-[#121212]/80 border border-white/10 flex items-center justify-center active:scale-95 shadow-lg shadow-primary-fixed/30">
              <MaterialIcons name="play-arrow" size={32} color="#D4FF00" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Exercise Info Card */}
        <View className="bg-surface-container rounded-xl p-6 border border-white/10 flex-col gap-3 relative overflow-hidden mb-6">
          <View className="absolute top-0 left-0 w-1 h-full bg-primary-fixed" />

          <View className="flex-row justify-between items-start">
            <View className="flex-1 pr-4">
              <Text className="font-h3 text-[24px] text-primary mb-1">Barbell Bench Press</Text>
              <Text className="font-body-md text-[16px] text-on-surface-variant">Göğüs kasları için temel güç egzersizi.</Text>
            </View>
            <View className="bg-surface-container-high px-3 py-1 rounded-full border border-outline-variant flex-row items-center gap-2">
              <View className="w-2 h-2 rounded-full bg-yellow-500" />
              <Text className="font-label-caps text-[12px] text-secondary">Zorluk: Orta</Text>
            </View>
          </View>

          <View className="flex-row gap-4 mt-2">
            <View className="flex-1 bg-surface-container-low p-3 rounded-lg border border-white/5">
              <Text className="font-label-caps text-[12px] text-on-surface-variant mb-1 uppercase">ANA KASLAR</Text>
              <Text className="font-body-md text-[16px] text-primary">Göğüs, Ön Omuz</Text>
            </View>
            <View className="flex-1 bg-surface-container-low p-3 rounded-lg border border-white/5">
              <Text className="font-label-caps text-[12px] text-on-surface-variant mb-1 uppercase">YARDIMCI KASLAR</Text>
              <Text className="font-body-md text-[16px] text-primary">Triceps</Text>
            </View>
          </View>

          {/* Warning Banner */}
          <View className="mt-2 bg-error-container/20 border border-error/30 rounded-lg p-3 flex-row items-start gap-3">
            <MaterialIcons name="warning" size={20} color="#ffb4ab" className="mt-0.5" />
            <Text className="font-body-md text-[16px] text-error-container flex-1">
              <Text className="font-bold">Dikkat: </Text>Omuz hassasiyetine dikkat edin.
            </Text>
          </View>
        </View>

        {/* Tracking Section */}
        <View className="bg-surface-container rounded-xl p-6 border border-white/10 flex-col gap-6 mb-2">

          <View className="flex-row justify-between items-center border-b border-white/10 pb-3">
            <View className="flex-row items-center gap-3">
              <Text className="font-h3 text-[24px] text-primary">Set Takibi</Text>
              <View className="bg-primary-fixed/10 px-3 py-1 rounded-md border border-primary-fixed/30">
                <Text className="font-label-caps text-[12px] font-bold text-primary-fixed tracking-widest">SET 1/4</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-zinc-800 px-3 py-1.5 rounded-lg border border-white/10 flex-row items-center gap-2 active:scale-95">
              <MaterialIcons name="calculate" size={18} color="white" />
              <Text className="font-lexend text-[12px] font-bold text-on-surface">1RM Hesapla</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Indicator */}
          <View className="flex-row gap-2 w-full mt-1">
            <View className="h-1.5 flex-1 rounded-full bg-primary-fixed" />
            <View className="h-1.5 flex-1 rounded-full bg-surface-container-high border border-white/10" />
            <View className="h-1.5 flex-1 rounded-full bg-surface-container-high border border-white/10" />
            <View className="h-1.5 flex-1 rounded-full bg-surface-container-high border border-white/10" />
          </View>

          {/* Current Set Inputs */}
          <View className="flex-row gap-3 items-end mt-2">
            <View className="flex-1 flex-col gap-1">
              <Text className="font-label-caps text-[12px] text-on-surface-variant ml-1 uppercase">TEKRAR</Text>
              <TextInput
                className="w-full bg-surface-container-high border-b-2 border-transparent text-primary font-h3 text-[24px] text-center py-3 rounded-t-lg focus:border-primary-fixed"
                placeholder="8-12"
                placeholderTextColor="rgba(197, 201, 172, 0.4)"
                keyboardType="numeric"
                value={reps}
                onChangeText={setReps}
              />
            </View>
            <View className="flex-1 flex-col gap-1">
              <Text className="font-label-caps text-[12px] text-on-surface-variant ml-1 uppercase">KİLO (KG)</Text>
              <TextInput
                className="w-full bg-surface-container-high border-b-2 border-transparent text-primary font-h3 text-[24px] text-center py-3 rounded-t-lg focus:border-primary-fixed"
                placeholder="80"
                placeholderTextColor="rgba(197, 201, 172, 0.4)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
              />
            </View>
          </View>

          {/* Rest Timer & Check */}
          <View className="flex-col gap-3 mt-2">
            <TouchableOpacity className="w-full bg-surface-container-high border border-outline-variant py-4 rounded-xl flex-row items-center justify-center gap-2 active:scale-95">
              <MaterialIcons name="check-circle" size={20} color="#caf300" />
              <Text className="text-primary font-lexend text-[16px] font-bold uppercase tracking-wider">Seti Tamamla</Text>
            </TouchableOpacity>

            <View className="bg-primary-fixed/5 p-4 rounded-xl border border-primary-fixed/30 flex-col items-center justify-center gap-1 relative overflow-hidden">
              <View className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
              <Text className="font-label-caps text-[12px] text-on-surface-variant tracking-widest uppercase">DİNLENME SÜRESİ</Text>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="timer" size={24} color="#caf300" />
                <Text className="font-h1 text-[40px] font-mono tracking-wider font-bold text-primary-fixed">01:00</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main Action */}
        <TouchableOpacity className="w-full bg-zinc-900 border border-primary-fixed/40 py-4 rounded-full flex-row items-center justify-center gap-2 active:scale-95 mt-2 mb-1">
          <MaterialIcons name="swap-horiz" size={24} color="#caf300" />
          <Text className="text-primary font-lexend text-[16px] font-bold">Alternatif Hareket Seç</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full bg-primary-fixed py-4 rounded-full flex-row items-center justify-center gap-2 active:scale-95 shadow-lg shadow-primary-fixed/30 mt-4"
          onPress={() => navigation.navigate('MainTabs' as never)}
        >
          <Text className="text-[#121212] font-h3 text-[20px] font-bold">Hareketi Tamamla</Text>
          <MaterialIcons name="arrow-forward" size={24} color="#121212" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
