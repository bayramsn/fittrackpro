import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AddSupplement() {
  const navigation = useNavigation();
  const [timing, setTiming] = useState('Sabah');
  const [reminder, setReminder] = useState(true);
  const [stock, setStock] = useState('');

  const timings = ['Sabah', 'Antrenman Öncesi', 'Antrenman Sonrası', 'Gece'];

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

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 64 }}>

        <View className="mb-6 mt-3">
          <Text className="font-h2 text-[32px] text-on-surface">Yeni Takviye</Text>
          <Text className="font-body-md text-[16px] text-on-surface-variant mt-1">
            Rutininizi güçlendirecek yakıtı tanımlayın.
          </Text>
        </View>

        <View className="flex-col gap-4">

          {/* Temel Bilgiler Kartı */}
          <View className="bg-surface-container-high rounded-lg p-6 border border-white/10 shadow-lg flex-col gap-6">
            <View className="flex-col gap-2">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Takviye Adı</Text>
              <TextInput
                className="w-full bg-surface-container text-on-surface font-body-lg text-[18px] p-3 rounded border-b-2 border-transparent focus:border-primary-fixed outline-none"
                placeholder="Örn: Whey Protein, Kreatin"
                placeholderTextColor="rgba(197, 201, 172, 0.4)"
              />
            </View>
            <View className="flex-col gap-2">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Dozaj</Text>
              <TextInput
                className="w-full bg-surface-container text-on-surface font-body-lg text-[18px] p-3 rounded border-b-2 border-transparent focus:border-primary-fixed outline-none"
                placeholder="Örn: 1 Ölçek, 5g"
                placeholderTextColor="rgba(197, 201, 172, 0.4)"
              />
            </View>
          </View>

          {/* Zamanlama & Sıklık Kartı */}
          <View className="bg-surface-container-high rounded-lg p-6 border border-white/10 shadow-lg flex-col gap-6">
            <View className="flex-col gap-3">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Zamanlama</Text>
              <View className="flex-row flex-wrap gap-3">
                {timings.map((t) => (
                  <TouchableOpacity
                    key={t}
                    onPress={() => setTiming(t)}
                    className={`px-3 py-1.5 rounded-full border ${timing === t ? 'bg-primary-fixed/10 border-primary-fixed' : 'border-outline-variant bg-surface-container'}`}
                  >
                    <Text className={`font-label-caps text-[12px] ${timing === t ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>{t}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View className="h-px w-full bg-white/10" />

            <View className="flex-col gap-2">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Sıklık</Text>
              <View className="relative justify-center">
                <TextInput
                  className="w-full bg-surface-container text-on-surface font-body-lg text-[18px] p-3 pr-10 rounded border border-outline-variant focus:border-primary-fixed outline-none"
                  value="Her Gün"
                  editable={false} // Since React Native doesn't have a native select like HTML without a modal, using read-only for mock
                />
                <MaterialIcons name="expand-more" size={24} color="#c5c9ac" className="absolute right-3" />
              </View>
            </View>
          </View>

          {/* Takip Kartı */}
          <View className="bg-surface-container-high rounded-lg p-6 border border-white/10 shadow-lg flex-col gap-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-col">
                <Text className="font-body-lg text-[18px] text-on-surface">Hatırlatıcı</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant">Kullanım zamanı geldiğinde bildirim al.</Text>
              </View>
              <Switch
                value={reminder}
                onValueChange={setReminder}
                trackColor={{ false: "#353534", true: "#caf300" }}
                thumbColor={reminder ? "#121212" : "#c5c9ac"}
              />
            </View>

            <View className="h-px w-full bg-white/10" />

            <View className="flex-col gap-2">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Stok Takibi (İsteğe Bağlı)</Text>
              <View className="flex-row items-center gap-3">
                <TextInput
                  className="w-24 bg-surface-container text-on-surface font-h3 text-[24px] p-3 rounded border-b-2 border-transparent focus:border-primary-fixed outline-none text-center"
                  placeholder="0"
                  placeholderTextColor="#c5c9ac"
                  keyboardType="numeric"
                  value={stock}
                  onChangeText={setStock}
                />
                <Text className="font-body-lg text-[18px] text-on-surface-variant">Servis / Ölçek kaldı</Text>
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <View className="mt-3">
            <TouchableOpacity className="w-full bg-primary-fixed py-4 rounded-full flex-row items-center justify-center gap-2 shadow-lg shadow-primary-fixed/20 active:scale-95">
              <MaterialIcons name="add" size={24} color="#171e00" />
              <Text className="text-on-primary-fixed font-label-caps text-[12px] uppercase">EKLE</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
