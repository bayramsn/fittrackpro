import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CancelWorkout() {
  const navigation = useNavigation();
  const [selectedReason, setSelectedReason] = useState<number | null>(1); // default to reason 1 for mock

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar Shared Component */}
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

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>

        {/* Hero Header Section */}
        <View className="relative pt-[64px] pb-6 px-4 mb-6">
          <ImageBackground
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbiOdoNU_lhbmHjFKJJUN7n45FnLvrWVjgLONkfW4zBoidwEPX6QB-Mex9BmN2bqQz2zsRC2POtVQ8yBxAVFBBbaBanffFRkl2umk0kX4tamMYFNQD73zCPOtlYrZFmyQqVBRr6saS8zNeInMZFPaFBnNfE6pjFFNeAVTkkLEP0vOc62gYvRtrru6dbb3N9eFRzXqw0Mt2I59kmwEo9uTw1HPzdOBx6yTLhJfpPTpBz2MzMdCS39SGQ5T1xCvLI9J_ia0pNTnuu9c" }}
            className="absolute inset-0 opacity-30"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-background/60 top-1/2 bottom-0" />

          <View className="relative z-10">
            <Text className="font-h1 text-[40px] text-on-surface mb-1 leading-tight">
              Neden bugün{"\n"}yapamıyorsun?
            </Text>
            <Text className="font-body-lg text-[18px] text-on-surface-variant">
              Antrenman planını buna göre optimize edelim.
            </Text>
          </View>
        </View>

        {/* Options Grid */}
        <View className="px-4 flex-col gap-3">

          {/* Option 1 */}
          <TouchableOpacity
            className={`flex-row items-center gap-6 p-6 rounded-xl border ${selectedReason === 1 ? 'bg-surface-container-high border-primary-container' : 'bg-surface-container border-surface-variant'} w-full active:scale-[0.98] relative overflow-hidden`}
            onPress={() => setSelectedReason(1)}
          >
            {selectedReason === 1 && <View className="absolute inset-0 bg-primary-container/5 opacity-100" />}
            <View className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${selectedReason === 1 ? 'bg-primary-container/20' : 'bg-surface-variant'}`}>
              <MaterialIcons name="self-improvement" size={24} color={selectedReason === 1 ? "#caf300" : "white"} />
            </View>
            <View className="flex-1 z-10">
              <Text className={`font-h3 text-[24px] mb-1 ${selectedReason === 1 ? 'text-on-surface' : 'text-on-surface'}`}>Dinlenme Günü</Text>
              <Text className="font-body-md text-[16px] text-on-surface-variant">Vücudumun toparlanmaya ihtiyacı var.</Text>
            </View>
            {selectedReason === 1 && (
              <View className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 z-10">
                <MaterialIcons name="check" size={16} color="#2a3400" />
              </View>
            )}
          </TouchableOpacity>

          {/* Option 2 */}
          <TouchableOpacity
            className={`flex-row items-center gap-6 p-6 rounded-xl border ${selectedReason === 2 ? 'bg-surface-container-high border-primary-container' : 'bg-surface-container border-surface-variant'} w-full active:scale-[0.98] relative overflow-hidden`}
            onPress={() => setSelectedReason(2)}
          >
            {selectedReason === 2 && <View className="absolute inset-0 bg-primary-container/5 opacity-100" />}
            <View className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${selectedReason === 2 ? 'bg-primary-container/20' : 'bg-surface-variant'}`}>
              <MaterialIcons name="access-time" size={24} color={selectedReason === 2 ? "#caf300" : "white"} />
            </View>
            <View className="flex-1 z-10">
              <Text className={`font-h3 text-[24px] mb-1 ${selectedReason === 2 ? 'text-on-surface' : 'text-on-surface'}`}>Çok Yoğunum</Text>
              <Text className="font-body-md text-[16px] text-on-surface-variant">Beklenmedik işlerim çıktı, zamanım yok.</Text>
            </View>
            {selectedReason === 2 && (
              <View className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 z-10">
                <MaterialIcons name="check" size={16} color="#2a3400" />
              </View>
            )}
          </TouchableOpacity>

          {/* Option 3 */}
          <TouchableOpacity
            className={`flex-row items-center gap-6 p-6 rounded-xl border ${selectedReason === 3 ? 'bg-surface-container-high border-primary-container' : 'bg-surface-container border-surface-variant'} w-full active:scale-[0.98] relative overflow-hidden`}
            onPress={() => setSelectedReason(3)}
          >
            {selectedReason === 3 && <View className="absolute inset-0 bg-primary-container/5 opacity-100" />}
            <View className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${selectedReason === 3 ? 'bg-primary-container/20' : 'bg-surface-variant'}`}>
              <MaterialIcons name="battery-alert" size={24} color={selectedReason === 3 ? "#caf300" : "white"} />
            </View>
            <View className="flex-1 z-10">
              <Text className={`font-h3 text-[24px] mb-1 ${selectedReason === 3 ? 'text-on-surface' : 'text-on-surface'}`}>Düşük Enerji</Text>
              <Text className="font-body-md text-[16px] text-on-surface-variant">Kendimi antrenman yapacak kadar iyi hissetmiyorum.</Text>
            </View>
            {selectedReason === 3 && (
              <View className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 z-10">
                <MaterialIcons name="check" size={16} color="#2a3400" />
              </View>
            )}
          </TouchableOpacity>

          {/* Option 4 */}
          <TouchableOpacity
            className={`flex-row items-center gap-6 p-6 rounded-xl border ${selectedReason === 4 ? 'bg-surface-container-high border-error-container' : 'bg-surface-container border-surface-variant'} w-full active:scale-[0.98] relative overflow-hidden`}
            onPress={() => setSelectedReason(4)}
          >
            {selectedReason === 4 && <View className="absolute inset-0 bg-error-container/5 opacity-100" />}
            <View className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${selectedReason === 4 ? 'bg-error-container/20' : 'bg-error-container/10'}`}>
              <MaterialIcons name="healing" size={24} color="#ffb4ab" />
            </View>
            <View className="flex-1 z-10">
              <Text className={`font-h3 text-[24px] mb-1 ${selectedReason === 4 ? 'text-error' : 'text-on-surface'}`}>Hafif Sakatlık</Text>
              <Text className="font-body-md text-[16px] text-on-surface-variant">Bir yerim ağrıyor veya sakatlık riskim var.</Text>
            </View>
            {selectedReason === 4 && (
              <View className="w-6 h-6 rounded-full bg-error flex items-center justify-center shrink-0 z-10">
                <MaterialIcons name="check" size={16} color="#690005" />
              </View>
            )}
          </TouchableOpacity>

        </View>

      </ScrollView>

      {/* Bottom Fixed CTA area */}
      <View className="absolute bottom-0 left-0 w-full p-4 bg-surface-container-lowest border-t border-surface-variant z-40 pb-8">
        <TouchableOpacity
          className="w-full bg-primary-container py-4 rounded-full flex-row items-center justify-center gap-3 shadow-lg shadow-primary-container/15 active:scale-[0.98]"
          onPress={() => navigation.navigate('PlanUpdated' as never)}
        >
          <Text className="text-on-primary-fixed font-label-caps text-[12px] uppercase">PLANI GÜNCELLE</Text>
          <MaterialIcons name="update" size={20} color="#171e00" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
