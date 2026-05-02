import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ExerciseDemo() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center w-full px-6 h-16 bg-[#121212] border-b border-white/10 z-50 shrink-0">
        <TouchableOpacity
          className="w-10 h-10 rounded-full flex items-center justify-center active:scale-95 transition-all"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text className="font-lexend font-bold text-lg uppercase tracking-tight text-white">
          Egzersiz GösterİMİ
        </Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 48 }}>

        {/* Video Player Area */}
        <View className="relative w-full aspect-[4/5] bg-[#1C1C1C] overflow-hidden">
          <ImageBackground
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC113_aKM8NPg7dFJoy2wmmqptkfHcth5bQRr2GlyRK0Va6tXbPi9aIRCVUhq4rCpfa41t37vHRXoWPAM_XqSmk2mvCIQb7yyKrcVk0Ovu4S6zeV0FubW0jVBySqV1Ml4mbO2tUHwHBbpj3SjIwBVmc5J55kx20NOV07CEBL41oNWdc9X8hyR-BXCOky2fm6ry-loAO2AS3S_AyKCOPPXyN4sfy154sTYOU4tB7cVpTNxMeAoBELrLNgKX8KIRbZDhn0S-LbpkoOsk" }}
            className="absolute inset-0 opacity-85"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

          <View className="absolute bottom-6 left-0 w-full px-6 flex-col items-center">
            <View className="px-3 py-1 bg-primary-container/10 border border-primary-container/30 rounded-full mb-3 backdrop-blur-sm">
              <Text className="text-primary-container text-[12px] font-lexend font-medium tracking-wider uppercase">Isınma</Text>
            </View>
            <Text className="font-lexend text-[32px] font-bold text-white text-center tracking-tight drop-shadow-md">
              Jumping Jacks
            </Text>
          </View>
        </View>

        {/* Controls & Timer Section */}
        <View className="px-6 py-8 flex-col items-center border-b border-white/10">

          {/* Progress Bar */}
          <View className="w-full flex-row items-center gap-4 mb-6">
            <Text className="text-[12px] font-medium text-[#A0A0A0] w-10 text-right">00:18</Text>
            <View className="flex-1 h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
              <View className="h-full bg-primary-container rounded-full shadow-lg shadow-primary-container/60" style={{ width: '60%' }} />
            </View>
            <Text className="text-[12px] font-medium text-[#A0A0A0] w-10">00:30</Text>
          </View>

          {/* Large Timer */}
          <Text className="font-lexend font-black text-[64px] tracking-widest text-white mb-8 drop-shadow-lg">
            00<Text className="text-primary-container">:</Text>12
          </Text>

          {/* Media Controls */}
          <View className="flex-row items-center justify-center gap-10">
            <TouchableOpacity className="active:scale-90">
              <MaterialIcons name="fast-rewind" size={36} color="rgba(255, 255, 255, 0.6)" />
            </TouchableOpacity>

            <TouchableOpacity className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center shadow-lg shadow-primary-container/40 border-4 border-[#121212] active:scale-95">
              <MaterialIcons name="pause" size={36} color="black" />
            </TouchableOpacity>

            <TouchableOpacity className="active:scale-90">
              <MaterialIcons name="fast-forward" size={36} color="rgba(255, 255, 255, 0.6)" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Tips Section */}
        <View className="px-6 py-8">
          <View className="bg-[#1C1C1C] rounded-2xl p-6 border border-[#2A2A2A] shadow-lg relative overflow-hidden">
            <View className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-10 rounded-full" />

            <View className="flex-row items-center gap-3 mb-5">
              <View className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
                <MaterialIcons name="tips-and-updates" size={20} color="#caf300" />
              </View>
              <Text className="font-lexend font-bold text-[18px] text-white tracking-wide">Form İpuçları</Text>
            </View>

            <View className="flex-col gap-4">
              <View className="flex-row items-start gap-3">
                <MaterialIcons name="check-circle" size={18} color="#caf300" className="mt-0.5" />
                <Text className="text-[#A0A0A0] leading-relaxed text-[14px] flex-1">
                  Kollarınızı başınızın üzerinde tamamen birleştirerek tam hareket aralığını kullanın.
                </Text>
              </View>
              <View className="flex-row items-start gap-3">
                <MaterialIcons name="check-circle" size={18} color="#caf300" className="mt-0.5" />
                <Text className="text-[#A0A0A0] leading-relaxed text-[14px] flex-1">
                  Dizlerinizi hafif bükük tutarak ayak parmak uçlarınızda yumuşak bir şekilde inin, eklemleri koruyun.
                </Text>
              </View>
              <View className="flex-row items-start gap-3">
                <MaterialIcons name="check-circle" size={18} color="#caf300" className="mt-0.5" />
                <Text className="text-[#A0A0A0] leading-relaxed text-[14px] flex-1">
                  Karın kaslarınızı tüm hareket boyunca sıkı tutarak gövde stabilitenizi sağlayın.
                </Text>
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
