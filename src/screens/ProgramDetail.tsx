import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProgramDetail() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="absolute z-50 top-0 w-full flex-row justify-between items-center px-6 py-4 bg-[#131313]/90 border-b border-white/10">
        <TouchableOpacity
          className="p-2 rounded-full flex items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#D4FF00" />
        </TouchableOpacity>
        <Text className="text-primary-fixed font-h3 text-lg tracking-tight uppercase">
          PROGRAM DETAYLARI
        </Text>
        <TouchableOpacity className="p-2 rounded-full flex items-center justify-center">
          <MaterialIcons name="more-vert" size={24} color="#A0A0A0" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 pt-20" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Hero Section */}
        <View className="relative w-full h-[397px] min-h-[350px]">
          <View className="absolute inset-0 bg-surface-container">
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDquzXrPuoomYqdARFbUAPipygnf-7fjwkwnOdr3wkFV85YJVPhjErdWXVc1kbioA2kK8hP868mYciNwV1VqW2TWmuweZXncwN-xfGf-058rK1_kf0sUB9UKWH6FesuBMN8iZKted5eNcmRa54HMtMpjX6Gv9UHFKt2sdh2gl_vjoo2NlWC8blBFOP6sH8UtBGNCTQNVJ5FKDph5hrdqFhuTW0dcAh_jTaxvotZ3QfAkLMMn1wnc34aGTbZLhC1AiYJxzvKY_bWuiQ" }}
              className="w-full h-full opacity-60"
              resizeMode="cover"
            />
          </View>
          {/* Gradient overlay simulation */}
          <View className="absolute inset-0 bg-background/60 top-1/2 bottom-0" />

          <View className="absolute bottom-0 left-0 w-full p-md flex-col gap-base pb-6 px-6">
            <View className="flex-row items-center gap-xs mb-2">
              <View className="bg-primary-container/10 px-3 py-1 rounded-full border border-primary-container/20 mr-2">
                <Text className="text-primary-container font-label-caps text-[12px]">Hipertrofi</Text>
              </View>
              <View className="bg-surface-container-high px-3 py-1 rounded-full border border-white/5">
                <Text className="text-on-surface font-label-caps text-[12px]">İleri Seviye</Text>
              </View>
            </View>
            <Text className="font-h1 text-[40px] text-primary mb-2">Push Pull Legs</Text>
            <Text className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
              Hacim ve güç artışı için tasarlanmış, haftada 6 gün yoğun antrenman içeren profesyonel split programı.
            </Text>
          </View>
        </View>

        {/* Stats Bar */}
        <View className="px-6 py-4">
          <View className="bg-surface-container rounded-xl border border-white/5 p-4 flex-row justify-between items-center">
            <View className="flex-col items-center flex-1">
              <MaterialIcons name="calendar-today" size={24} color="#caf300" className="mb-1" />
              <Text className="font-label-caps text-[12px] text-on-surface-variant mt-1">SÜRE</Text>
              <Text className="font-body-md text-[16px] font-bold text-white mt-1">12 Hafta</Text>
            </View>
            <View className="w-px h-10 bg-white/10" />
            <View className="flex-col items-center flex-1">
              <MaterialIcons name="timer" size={24} color="#caf300" className="mb-1" />
              <Text className="font-label-caps text-[12px] text-on-surface-variant mt-1">GÜNLÜK</Text>
              <Text className="font-body-md text-[16px] font-bold text-white mt-1">60-90 Dk</Text>
            </View>
            <View className="w-px h-10 bg-white/10" />
            <View className="flex-col items-center flex-1">
              <MaterialIcons name="fitness-center" size={24} color="#caf300" className="mb-1" />
              <Text className="font-label-caps text-[12px] text-on-surface-variant mt-1">SIKLIK</Text>
              <Text className="font-body-md text-[16px] font-bold text-white mt-1">6 Gün/Hft</Text>
            </View>
          </View>
        </View>

        {/* Haftalık Plan (Bento Grid) */}
        <View className="px-6 py-4 flex-col gap-sm">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="font-h2 text-[32px] text-white">Haftalık Plan</Text>
            <TouchableOpacity>
              <Text className="text-primary-container text-sm font-bold uppercase tracking-wider">Tümünü Gör</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {/* Day 1: Push */}
            <TouchableOpacity className="w-[48%] bg-surface-container-high rounded-xl p-4 border-l-4 border-primary-container flex-col gap-2 relative overflow-hidden mb-4">
              <Text className="font-label-caps text-[12px] text-on-surface-variant">GÜN 1 • PAZARTESİ</Text>
              <Text className="font-h3 text-[24px] text-primary mt-1">İtiş (Push)</Text>
              <Text className="font-body-md text-on-surface-variant text-sm mt-1">Göğüs, Omuz, Arka Kol</Text>
              <View className="absolute -right-4 -bottom-4 opacity-10">
                <MaterialIcons name="fitness-center" size={80} color="white" />
              </View>
            </TouchableOpacity>

            {/* Day 2: Pull */}
            <TouchableOpacity className="w-[48%] bg-surface-container rounded-xl p-4 border border-white/5 flex-col gap-2 relative overflow-hidden mb-4">
              <Text className="font-label-caps text-[12px] text-on-surface-variant">GÜN 2 • SALI</Text>
              <Text className="font-h3 text-[24px] text-primary mt-1">Çekiş (Pull)</Text>
              <Text className="font-body-md text-on-surface-variant text-sm mt-1">Sırt, Pazu, Arka Omuz</Text>
            </TouchableOpacity>

            {/* Day 3: Legs */}
            <TouchableOpacity className="w-[48%] bg-surface-container rounded-xl p-4 border border-white/5 flex-col gap-2 relative overflow-hidden mb-4">
              <Text className="font-label-caps text-[12px] text-on-surface-variant">GÜN 3 • ÇARŞAMBA</Text>
              <Text className="font-h3 text-[24px] text-primary mt-1">Bacak (Legs)</Text>
              <Text className="font-body-md text-on-surface-variant text-sm mt-1">Ön Bacak, Arka Bacak, Kalf</Text>
            </TouchableOpacity>

            {/* Day 4: Rest */}
            <View className="w-[48%] bg-surface-dim rounded-xl p-4 border border-dashed border-white/10 flex-col items-center justify-center gap-2 text-center mb-4">
              <MaterialIcons name="snooze" size={24} color="#c5c9ac" />
              <Text className="font-label-caps text-[12px] text-on-surface-variant mt-1">GÜN 4 • PERŞEMBE</Text>
              <Text className="font-body-lg text-[18px] text-on-surface-variant mt-1 text-center">Aktif Dinlenme</Text>
            </View>
          </View>
        </View>

        {/* Örnek Egzersizler */}
        <View className="px-6 py-4 flex-col gap-sm">
          <Text className="font-h2 text-[32px] text-white mb-4">Örnek Egzersizler</Text>

          <View className="flex-col gap-4">
            {/* Exercise 1 */}
            <View className="bg-surface-container/80 rounded-xl p-3 border border-white/5 flex-row items-center gap-4">
              <View className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-high">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7kJnAwW2gKxWeXxyRQ_aduS0iC6OzHvKP0bxUNMBVxhkERRyOxApykZ6GnMFg3aP7lsKgvXo_uhBttnWC8hVubJvbkEQ5_ZWmtr78j49onAu0et5Wp1lp0EbjSf7dDSl9NiQteNHh6K03zftNSbQzgAtA5YrRDo8YYvMm7TKFzthK-t2ybgvT6nu03D_8oQi8T_-iO6IF1h60kSIJD0VYVZ4uXU8TI6ClJqVn9WpOCEUa7ovU1Q5plUZv_RztdmyMO_xOQ5aYBc" }}
                  className="w-full h-full opacity-80"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1 flex-col gap-1">
                <Text className="font-label-caps text-[12px] text-primary-container">ANA HAREKET • İTİŞ</Text>
                <Text className="font-h3 text-[20px] text-primary mt-1">Barbell Bench Press</Text>
                <View className="flex-row items-center gap-1 mt-1">
                  <MaterialIcons name="repeat" size={16} color="#c5c9ac" />
                  <Text className="font-body-md text-sm text-on-surface-variant">4 Set x 8-10 Tekrar</Text>
                </View>
              </View>
            </View>

            {/* Exercise 2 */}
            <View className="bg-surface-container/80 rounded-xl p-3 border border-white/5 flex-row items-center gap-4">
              <View className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-high">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsRYJz3JJj9gQ7qzPnc00tHpNacGAI1A8wACOUGkVJelzHs4nFlmF9OkFTNPPE4DfnuAn7ez2-nxY0VXbV9wRYKHAaQyb4zGmFnuxKyqcNIACgwy5kN6OxXC3raBLoUVq82IWObuK9aotZqxv7rHz_vCl-gLtURm-f10suBsu4Sshz_k3-WOBaynEO5eBDdFbK8ks6FjgrvkfcQVeQh6keKr_AE8tii0ywOp5qYaxn3kyTs7kNAHPyrdi4gpr-GHG9WoyVgYU4JUc" }}
                  className="w-full h-full opacity-80"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1 flex-col gap-1">
                <Text className="font-label-caps text-[12px] text-primary-container">ANA HAREKET • ÇEKİŞ</Text>
                <Text className="font-h3 text-[20px] text-primary mt-1">Bent Over Barbell Row</Text>
                <View className="flex-row items-center gap-1 mt-1">
                  <MaterialIcons name="repeat" size={16} color="#c5c9ac" />
                  <Text className="font-body-md text-sm text-on-surface-variant">4 Set x 8-12 Tekrar</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sticky CTA */}
      <View className="absolute bottom-0 left-0 w-full p-4 bg-background z-40 pb-10 pt-4">
        <TouchableOpacity className="w-full bg-primary-container hover:bg-primary-fixed-dim py-4 rounded-full flex-row justify-center items-center gap-2 active:scale-95">
          <Text className="text-on-primary-container font-h3 text-[20px]">Programa Başla</Text>
          <MaterialIcons name="bolt" size={24} color="#596c00" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
