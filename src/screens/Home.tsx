import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center w-full px-6 py-4 bg-zinc-950/90 border-b border-transparent z-40">
        <View className="w-full flex-row justify-center items-center">
          <Text className="font-lexend font-bold tracking-tight text-lg text-[#D4FF00]">FitTrack Pro</Text>
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 100 }}>

        {/* Welcome Section */}
        <View className="flex-col gap-1 mb-6">
          <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase tracking-widest">14 Ekim Pazartesi</Text>
          <Text className="font-h2 text-[32px] text-on-background">Merhaba, <Text className="text-primary-fixed">Şampiyon</Text></Text>
        </View>

        {/* Today's Workout Hero Card */}
        <TouchableOpacity
          className="w-full rounded-xl overflow-hidden min-h-[300px] flex-col justify-end p-6 border border-white/5 mb-6 active:scale-[0.98]"
          onPress={() => navigation.navigate('WarmUp' as never)}
        >
          <ImageBackground
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBrDIXy5MO2SywbL6PVA0HPi8NgrdZzSQAGLQN58kFIFa0Oho4e8dOLt5pd6XdVZeVy14IC0jWpqoYcVcQp2Ir8INP4sMugOAvYJV9tah7hVKdAZQUnpKYF3nrsUptmmSEGDg5hCKfZlieqFDjpV6XXKYt8Kxv9KtwDEsurph2-5aC605vOPwtcjhn9mfoOV4wa_chFOidT1aqDrS3qUHBq1rI_vpfIkFnOZ45yIugcY8gXCOcOHVUP9K4Lra13V4vgGtl1C2EQbw" }}
            className="absolute inset-0"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-background/60 top-1/2 bottom-0" />

          <View className="relative z-10 flex-col gap-3">
            <View className="flex-row items-center gap-1 bg-black/40 self-start px-3 py-1 rounded-full border border-primary-fixed/30">
              <MaterialIcons name="local-fire-department" size={16} color="#caf300" />
              <Text className="font-label-caps text-[12px] text-primary-fixed uppercase tracking-widest ml-1">BUGÜNKÜ PROGRAM</Text>
            </View>
            <Text className="font-h1 text-[40px] text-on-background mt-1">HIIT Karın & Güç</Text>
            <Text className="font-body-lg text-[18px] text-on-surface-variant" numberOfLines={2}>
              Tüm vücudu hedefleyen, patlayıcı güç ve çekirdek stabilitesini artıran 45 dakikalık yüksek yoğunluklu interval antrenmanı.
            </Text>

            <View className="flex-row items-center justify-between mt-6 pt-3 border-t border-white/10">
              <View className="flex-row gap-6">
                <View className="flex-col">
                  <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">SÜRE</Text>
                  <Text className="font-h3 text-[20px] text-on-background">45 Dk</Text>
                </View>
                <View className="flex-col">
                  <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">SEVİYE</Text>
                  <Text className="font-h3 text-[20px] text-on-background">İleri</Text>
                </View>
              </View>
              <View className="bg-primary-container py-2 px-6 rounded-full flex-row items-center gap-1 shadow-lg shadow-primary-container/30">
                <MaterialIcons name="play-arrow" size={18} color="#596c00" />
                <Text className="text-on-primary-container font-label-caps text-[12px] uppercase font-bold">BAŞLA</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Stats Bento Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
          {/* Calories (Spans full width) */}
          <TouchableOpacity
            className="w-full bg-surface-container rounded-xl p-6 border border-white/5 flex-col gap-6 relative overflow-hidden"
            onPress={() => navigation.navigate('DashboardPlanReady' as never)}
          >
            <View className="flex-row justify-between items-start z-10">
              <View className="flex-row items-center gap-2">
                <View className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5">
                  <MaterialIcons name="local-dining" size={16} color="#caf300" />
                </View>
                <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase tracking-widest">NET KALORİ</Text>
              </View>
            </View>
            <View className="flex-col z-10 mt-auto">
              <View className="flex-row items-baseline gap-1">
                <Text className="font-h2 text-[32px] text-on-background">1,850</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant">/ 2,500 kcal</Text>
              </View>
              <View className="w-full h-2 bg-surface-container-highest rounded-full mt-3 overflow-hidden">
                <View className="h-full bg-primary-fixed rounded-full" style={{ width: '74%' }} />
              </View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant mt-2 text-right">Hedefe 650 kcal kaldı</Text>
            </View>
          </TouchableOpacity>

          {/* Water */}
          <TouchableOpacity className="w-[48%] bg-surface-container rounded-xl p-4 border border-white/5 flex-col gap-3 justify-between">
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5">
                <MaterialIcons name="water-drop" size={16} color="#4ea8de" />
              </View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase tracking-widest">SU</Text>
            </View>
            <View className="flex-col mt-6">
              <View className="flex-row items-baseline gap-1">
                <Text className="font-h3 text-[24px] text-on-background">1.5</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant">L</Text>
              </View>
              <Text className="font-body-md text-[12px] text-on-surface-variant">Hedef: 3.0 L</Text>
            </View>
          </TouchableOpacity>

          {/* Sleep */}
          <TouchableOpacity className="w-[48%] bg-surface-container rounded-xl p-4 border border-white/5 flex-col gap-3 justify-between">
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5">
                <MaterialIcons name="bedtime" size={16} color="#7b2cbf" />
              </View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase tracking-widest">UYKU</Text>
            </View>
            <View className="flex-col mt-6">
              <View className="flex-row items-baseline gap-1">
                <Text className="font-h3 text-[24px] text-on-background">7</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant">s</Text>
                <Text className="font-h3 text-[24px] text-on-background ml-1">15</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant">d</Text>
              </View>
              <View className="flex-row items-center gap-1 mt-1">
                <MaterialIcons name="trending-up" size={14} color="#caf300" />
                <Text className="font-body-md text-[12px] text-primary-fixed">Optimum</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Actions (Horizontal Scroll) */}
        <View className="flex-col gap-3 mb-6">
          <Text className="font-h3 text-[18px] text-on-background">Hızlı Aksiyonlar</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
            <TouchableOpacity
              className="w-[120px] bg-surface-container border border-white/5 rounded-xl flex-col items-center justify-center gap-3 p-6 active:scale-95"
              onPress={() => navigation.navigate('WeightEntry' as never)}
            >
              <View className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <MaterialIcons name="monitor-weight" size={24} color="white" />
              </View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">KİLO GİR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[120px] bg-surface-container border border-white/5 rounded-xl flex-col items-center justify-center gap-3 p-6 active:scale-95"
              onPress={() => navigation.navigate('SupplementsTab' as never)}
            >
              <View className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <MaterialIcons name="medication" size={24} color="white" />
              </View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Takviye</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[120px] bg-surface-container border border-white/5 rounded-xl flex-col items-center justify-center gap-3 p-6 active:scale-95"
              onPress={() => navigation.navigate('ProgramDetail' as never)}
            >
              <View className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <MaterialIcons name="analytics" size={24} color="white" />
              </View>
              <Text className="font-label-caps text-[12px] text-on-surface-variant uppercase">Program</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Mini Analytics / Insights */}
        <View className="flex-col gap-3">
          <Text className="font-h3 text-[18px] text-on-background">Günlük Analiz</Text>
          <View className="flex-col gap-4">

            {/* Insight Card 1 */}
            <View className="bg-surface-container rounded-xl p-6 border-l-4 border-l-primary-fixed border border-white/5 flex-row items-start gap-4">
              <View className="w-10 h-10 rounded-full bg-primary-fixed/10 flex items-center justify-center">
                <MaterialIcons name="egg-alt" size={24} color="#caf300" />
              </View>
              <View className="flex-col flex-1 gap-1">
                <Text className="font-body-lg text-[18px] text-on-background font-bold">Protein Eksikliği</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                  Günlük makro hedefine ulaşmak için <Text className="text-on-background font-bold">40g</Text> daha protein almalısın. Akşam yemeğinde tavuk veya balık tercih edebilirsin.
                </Text>
              </View>
            </View>

            {/* Insight Card 2 */}
            <View className="bg-surface-container rounded-xl p-6 border border-white/5 flex-row items-start gap-4">
              <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5">
                <MaterialIcons name="emoji-events" size={24} color="white" />
              </View>
              <View className="flex-col flex-1 gap-1">
                <Text className="font-body-lg text-[18px] text-on-background font-bold">Haftalık İlerleme</Text>
                <Text className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                  Bu hafta planlanan 5 antrenmanın <Text className="text-primary-fixed font-bold">3'ünü</Text> tamamladın. Disiplinini koruyorsun, aynen devam!
                </Text>
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
