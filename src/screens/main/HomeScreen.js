import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-[#ffffff10]">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
            <MaterialIcons name="person" size={20} color="#e5e2e1" />
          </View>
          <View>
            <Text className="font-h3 text-[18px] text-primary leading-tight">Merhaba, Alex!</Text>
            <Text className="font-label-caps text-secondary text-[10px]">GÜN 4 - HAFTA 1</Text>
          </View>
        </View>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-[#ffffff10]">
          <MaterialIcons name="notifications" size={20} color="#e5e2e1" />
          <View className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-fixed" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-margin pt-md pb-xl">

          {/* Activity Rings / Stats summary */}
          <View className="flex-row justify-between mb-lg">
             <View className="flex-1 bg-surface-container rounded-xl p-4 border border-[#ffffff10] mr-2">
                <View className="flex-row items-center gap-1 mb-1">
                  <MaterialIcons name="local-fire-department" size={16} color="#caf300" />
                  <Text className="font-label-caps text-secondary text-[10px]">KALORİ</Text>
                </View>
                <View className="flex-row items-baseline gap-1">
                  <Text className="font-h2 text-[24px] text-primary">450</Text>
                  <Text className="font-body-md text-secondary text-[12px]">/ 600</Text>
                </View>
             </View>

             <View className="flex-1 bg-surface-container rounded-xl p-4 border border-[#ffffff10] ml-2 flex-row items-center justify-between">
                <View>
                  <View className="flex-row items-center gap-1 mb-1">
                    <MaterialIcons name="timer" size={16} color="#caf300" />
                    <Text className="font-label-caps text-secondary text-[10px]">SÜRE</Text>
                  </View>
                  <View className="flex-row items-baseline gap-1">
                    <Text className="font-h2 text-[24px] text-primary">45</Text>
                    <Text className="font-body-md text-secondary text-[12px]">dk</Text>
                  </View>
                </View>
                <View className="w-10 h-10 rounded-full border-4 border-surface-container-high relative flex items-center justify-center">
                    <View className="absolute inset-0 rounded-full border-4 border-primary-fixed border-t-transparent border-r-transparent rotate-45" />
                </View>
             </View>
          </View>

          {/* Today's Workout Hero Card */}
          <View className="mb-lg">
            <View className="flex-row items-center justify-between mb-sm">
              <Text className="font-h3 text-[20px] text-primary">Bugünün Antrenmanı</Text>
              <TouchableOpacity>
                <Text className="font-label-caps text-primary-fixed">TÜMÜNÜ GÖR</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              className="w-full h-[220px] rounded-2xl overflow-hidden relative"
              onPress={() => navigation.navigate('ActiveWorkout')}
            >
              <ImageBackground
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLVU9e8zJXermuOs611JG1qYBolHCKuuNgy1AhhF2aZBodJzcerv-b7NkTTqARGjtxcxJSvgLgNg5bHHCiIZXcUHGngnYoHUFDm6phwsCfTXlPkYC3oi5Z_NhNlghkD9Saswltef6vkwCLNoG2BKx6towgnL9wEcMupvk7EobYquEg5x1WluaEuNM4Y9MFAlxnLMKLh8_XcNhaMTzdlY_Qe2eIbbjZFrW5vbXX3t5pB2gzhBfU9DW70ji23HJuO3hgHDdTTne09b0' }}
                className="w-full h-full"
                resizeMode="cover"
              >
                <LinearGradient
                  colors={['transparent', 'rgba(19,19,19,0.9)']}
                  className="absolute inset-0"
                />
              </ImageBackground>

              <View className="absolute inset-0 p-md flex-col justify-end">
                <View className="bg-primary-fixed self-start px-3 py-1 rounded-full mb-2">
                   <Text className="font-label-caps text-on-primary-fixed text-[10px]">PUSH GÜNÜ</Text>
                </View>
                <Text className="font-h2 text-[28px] text-primary mb-1">Göğüs & Omuz</Text>
                <View className="flex-row items-center gap-3">
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="schedule" size={14} color="#e5e2e1" />
                    <Text className="font-body-md text-[14px] text-on-surface">60 dk</Text>
                  </View>
                  <View className="w-1 h-1 rounded-full bg-surface-variant" />
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="fitness-center" size={14} color="#e5e2e1" />
                    <Text className="font-body-md text-[14px] text-on-surface">6 Hareket</Text>
                  </View>
                </View>
              </View>

              <View className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                <MaterialIcons name="play-arrow" size={28} color="#171e00" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Macros Summary */}
          <View className="mb-lg">
             <View className="flex-row items-center justify-between mb-sm">
              <Text className="font-h3 text-[20px] text-primary">Günlük Makrolar</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Nutrition')}>
                <Text className="font-label-caps text-primary-fixed">DETAYLAR</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row gap-x-2 mb-sm">
              <TouchableOpacity onPress={() => navigation.navigate('WeightEntry')} className="flex-1 bg-surface-container rounded-xl p-3 border border-[#ffffff10] flex-row items-center justify-between">
                 <Text className="font-h3 text-primary text-[14px]">Kilo Gir</Text>
                 <MaterialIcons name="monitor-weight" size={20} color="#caf300" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SupplementTracking')} className="flex-1 bg-surface-container rounded-xl p-3 border border-[#ffffff10] flex-row items-center justify-between">
                 <Text className="font-h3 text-primary text-[14px]">Takviyeler</Text>
                 <MaterialIcons name="medication" size={20} color="#caf300" />
              </TouchableOpacity>
            </View>


            <View className="bg-surface-container p-md rounded-xl border border-[#ffffff10]">
              <View className="flex-row justify-between mb-4">
                <View className="flex-col">
                  <Text className="font-label-caps text-secondary mb-1">PROTEİN</Text>
                  <Text className="font-h3 text-primary">120<Text className="text-secondary text-[14px]">/160g</Text></Text>
                </View>
                <View className="flex-col">
                  <Text className="font-label-caps text-secondary mb-1">KARB</Text>
                  <Text className="font-h3 text-primary">180<Text className="text-secondary text-[14px]">/250g</Text></Text>
                </View>
                <View className="flex-col">
                  <Text className="font-label-caps text-secondary mb-1">YAĞ</Text>
                  <Text className="font-h3 text-primary">45<Text className="text-secondary text-[14px]">/65g</Text></Text>
                </View>
              </View>
              <View className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden flex-row">
                 <View className="h-full bg-primary-fixed w-[75%]" />
                 <View className="h-full bg-[#8f9378] w-[40%] absolute left-0 opacity-50" />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
