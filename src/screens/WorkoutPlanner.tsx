import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function WorkoutPlanner() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center w-full px-6 h-16 bg-[#121212] border-b border-white/10 z-50">
        <View className="w-6" />
        <Text className="font-lexend font-bold tracking-tight text-lg text-primary-fixed">
          FitTrack Pro
        </Text>
        <View className="w-6" />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 100 }}>

        {/* Header Section */}
        <View className="mb-6">
          <Text className="font-h2 text-[32px] text-on-surface mb-1">Programım</Text>
          <Text className="font-body-md text-[16px] text-on-surface-variant">Hedeflerine ulaşmak için bugünün planına sadık kal.</Text>
        </View>

        {/* Selected Program Card */}
        <TouchableOpacity className="mb-10 relative rounded-xl overflow-hidden border border-white/10 bg-surface-container shadow-lg shadow-black/40 h-[220px] active:scale-[0.98]">
          <ImageBackground
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrDAUZJvvAkX2DXCTzYYCViOyAbk5wGGi6laJlCrMZbjsbC8EUAfJpJGiEzkUFM1Ho8WSHJ0ih0rCQR5ARtx7N6k1weFsuU5Ga2YDGLfurK6GDl2nQTCPN1LLjyJUldN2HOQBi6Qjn5VqfaYjJ4bdwtqPdVT8mXMECuOqra5k_GB8egadh8-Z73RngMf4z58Twasa5-f1uqacP9J1bLf-s_EeyQvy-N23FqvlJEaffcwX42gu7E8g0XkhnyPLLl5xl_UAvVbCd7Ps" }}
            className="absolute inset-0 opacity-60"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent" />

          <View className="relative z-10 p-6 flex-col justify-end h-full">
            <View className="flex-row items-center gap-2 mb-2">
              <View className="bg-primary-fixed px-2 py-1 rounded-sm">
                <Text className="text-on-primary-fixed font-label-caps text-[12px] uppercase">Aktif Faz</Text>
              </View>
              <View className="bg-surface-variant/80 px-2 py-1 rounded-sm">
                <Text className="text-tertiary-fixed font-label-caps text-[12px] uppercase tracking-widest">Hafta 4/8</Text>
              </View>
            </View>
            <Text className="font-h2 text-[32px] text-primary-fixed mb-1 drop-shadow-md">Hipertrofi Protokolü</Text>
            <Text className="font-body-lg text-[18px] text-tertiary-fixed max-w-[80%]">Üst Vücut Odaklı Güç Antrenmanı</Text>
          </View>
        </TouchableOpacity>

        {/* Weekly Plan (Days List) */}
        <View className="mb-10">
          <View className="flex-row justify-between items-end mb-3">
            <Text className="font-h3 text-[24px] text-on-surface">Haftalık Plan</Text>
            <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Ekim 2023</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
            {/* Day: Past */}
            <View className="w-[60px] h-[80px] rounded-lg bg-surface-container border border-outline-variant/30 flex-col items-center justify-center opacity-60">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Pzt</Text>
              <Text className="font-h3 text-[24px] text-on-surface-variant mt-1">16</Text>
            </View>
            {/* Day: Past */}
            <View className="w-[60px] h-[80px] rounded-lg bg-surface-container border border-outline-variant/30 flex-col items-center justify-center opacity-60">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Sal</Text>
              <Text className="font-h3 text-[24px] text-on-surface-variant mt-1">17</Text>
            </View>
            {/* Day: Today (Highlighted) */}
            <View className="w-[64px] h-[88px] rounded-lg bg-surface-container-high border-2 border-primary-fixed flex-col items-center justify-center relative shadow-lg shadow-primary-fixed/15 -mt-1">
              <View className="absolute -top-2 w-4 h-4 bg-primary-fixed rounded-full border-4 border-background" />
              <Text className="font-label-caps text-[12px] text-primary-fixed uppercase mt-2">Çar</Text>
              <Text className="font-h2 text-[32px] text-on-surface mt-1">18</Text>
            </View>
            {/* Day: Future */}
            <View className="w-[60px] h-[80px] rounded-lg bg-surface-container border border-white/10 flex-col items-center justify-center">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Per</Text>
              <Text className="font-h3 text-[24px] text-on-surface mt-1">19</Text>
            </View>
            {/* Day: Future */}
            <View className="w-[60px] h-[80px] rounded-lg bg-surface-container border border-white/10 flex-col items-center justify-center">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Cum</Text>
              <Text className="font-h3 text-[24px] text-on-surface mt-1">20</Text>
            </View>
            {/* Day: Rest */}
            <View className="w-[60px] h-[80px] rounded-lg bg-surface-container-lowest border border-outline-variant/50 flex-col items-center justify-center opacity-50">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Cmt</Text>
              <MaterialIcons name="bed" size={24} color="#b6b5b4" className="mt-1" />
            </View>
            {/* Day: Rest */}
            <View className="w-[60px] h-[80px] rounded-lg bg-surface-container-lowest border border-outline-variant/50 flex-col items-center justify-center opacity-50">
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Paz</Text>
              <MaterialIcons name="bed" size={24} color="#b6b5b4" className="mt-1" />
            </View>
          </ScrollView>
        </View>

        {/* Exercise List */}
        <View className="mb-10">
          <Text className="font-h3 text-[24px] text-on-surface mb-6">Bugünkü Egzersizler</Text>
          <View className="flex-col gap-3">

            {/* Exercise 1 */}
            <View className="bg-surface-container rounded-lg p-3 flex-row items-center gap-3 border border-white/10">
              <View className="w-16 h-16 rounded-md overflow-hidden bg-surface-container-high relative">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGpxyLELnr7eXSexqgj5myjyKODh9md7gD9HAAgpwyYW5xkLmEYqFl61RQz7TFP_QWMC25BPszUHe6TcyUDLtBF-Kqfyh-a0Hryr2Cg8-7I1hY5zyCJYi_fyerDEd4ibFUgiNQX-avtHRaTAfdOwA_AtCF2uvkR60FVIgg3RaAWYl8Y-yal96vOIiwukoks9_PpTro8oYQYkt0DS8JHSyWjR3-i1CoQ7XsJihzCMKZBlPz9yNJyCioN-pQdpIHtngCQT1T18_dfh0" }}
                  className="w-full h-full object-cover"
                />
                <View className="absolute inset-0 bg-background/20" />
              </View>
              <View className="flex-1">
                <Text className="font-body-lg text-[18px] text-on-surface">Barbell Bench Press</Text>
                <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Göğüs • Ön Omuz</Text>
              </View>
              <View className="bg-surface-variant rounded-md px-3 py-2 border border-outline-variant/30 justify-center items-center">
                <Text className="font-h3 text-[24px] text-primary-fixed">4<Text className="text-[12px] text-on-surface-variant font-body-md">x</Text>8</Text>
              </View>
            </View>

            {/* Exercise 2 */}
            <View className="bg-surface-container rounded-lg p-3 flex-row items-center gap-3 border border-white/10">
              <View className="w-16 h-16 rounded-md overflow-hidden bg-surface-container-high relative">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnIFWtN_XcZtYumrPRQIUaUH30EK6-9iIh3INKz8WHHJOipeFq92KjncPV1wRp5bOIAflJY4AnYmJkpsyGHuilQuiVXj3T_HQr0wPKSAAYWS2uV3b15jVclxSnXXXAxrXluUtRwy9-QZFK2qnNoKpowvsOno_KFcfxACRdkCiqbvX1Zrauauw_djgKT5TDNU4HM_Fyklo79cjpl55GdRaT3RNgGDj2kdlA6LhkJZ1UOSKtdnULRwOn6UmovkvO9_bsUIxvZZCFJjY" }}
                  className="w-full h-full object-cover"
                />
                <View className="absolute inset-0 bg-background/20" />
              </View>
              <View className="flex-1">
                <Text className="font-body-lg text-[18px] text-on-surface">Dumbbell Overhead Press</Text>
                <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Omuz • Triceps</Text>
              </View>
              <View className="bg-surface-variant rounded-md px-3 py-2 border border-outline-variant/30 justify-center items-center">
                <Text className="font-h3 text-[24px] text-primary-fixed">3<Text className="text-[12px] text-on-surface-variant font-body-md">x</Text>10</Text>
              </View>
            </View>

            {/* Exercise 3 */}
            <View className="bg-surface-container rounded-lg p-3 flex-row items-center gap-3 border border-white/10">
              <View className="w-16 h-16 rounded-md overflow-hidden bg-surface-container-high relative">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWREBNafAjCXTMpJdF5VL8hHUvtXU-e23P7GCvKeNWabPDwDJhmmHmyzVARZfeivA_o06yVZYpJ-h5ea3i_scI8Vaq7WrudljWpNNH36_ZV1V73hNMbz-TuQsSEY2MgcJA80ZS-da2_MC4FrFsgt1ls0HIJ_vMZTpgW3pNIG9GFcBQ9_jJCDqr9iZwnjH8l_-WeZtV3N5opHx_u0DrwlLvS2fcDld9Se20KWfBAOQss5jAL26ebANtJnEknzAA1S0G9rP83wr_sQ8" }}
                  className="w-full h-full object-cover"
                />
                <View className="absolute inset-0 bg-background/20" />
              </View>
              <View className="flex-1">
                <Text className="font-body-lg text-[18px] text-on-surface">Lat Pulldown</Text>
                <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Sırt • Biceps</Text>
              </View>
              <View className="bg-surface-variant rounded-md px-3 py-2 border border-outline-variant/30 justify-center items-center">
                <Text className="font-h3 text-[24px] text-primary-fixed">4<Text className="text-[12px] text-on-surface-variant font-body-md">x</Text>12</Text>
              </View>
            </View>

          </View>
        </View>

        {/* Call to Action */}
        <View className="mt-10 mb-6">
          <TouchableOpacity
            className="w-full bg-primary-fixed hover:bg-primary-container py-4 rounded-full shadow-lg shadow-primary-fixed/20 flex-row items-center justify-center gap-2 active:scale-95 transition-all"
            onPress={() => navigation.navigate('ActiveWorkout' as never)}
          >
            <MaterialIcons name="play-arrow" size={24} color="#171e00" />
            <Text className="text-on-primary-fixed font-h3 text-[24px]">ANTRENMANI BAŞLAT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mx-auto mt-6 px-6 py-2 flex-row items-center justify-center gap-2 bg-red-900/40 border border-red-800/30 rounded-full active:scale-95"
            onPress={() => navigation.navigate('CancelWorkout' as never)}
          >
            <MaterialIcons name="event-busy" size={18} color="white" />
            <Text className="text-white font-label-caps text-[11px]">BUGÜN YAPAMAYACAĞIM</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
