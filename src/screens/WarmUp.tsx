import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function WarmUp() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* Top App Bar */}
      <View className="flex-row justify-between items-center w-full px-6 py-4 bg-zinc-950/90 border-b border-transparent z-40">
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

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 32, paddingBottom: 120 }}>

        {/* Header Info */}
        <View className="mb-6 items-center">
          <View className="flex-row gap-4 items-center bg-surface-container-high px-4 py-2 rounded-full border border-white/10">
            <View className="flex-row items-center gap-1.5">
              <MaterialIcons name="timer" size={16} color="#caf300" />
              <Text className="font-label-caps text-[12px] text-on-surface">Süre: 5 Dakika</Text>
            </View>
            <View className="w-px h-4 bg-outline-variant" />
            <View className="flex-row items-center gap-1.5">
              <MaterialIcons name="fitness-center" size={16} color="#caf300" />
              <Text className="font-label-caps text-[12px] text-on-surface">4 Hareket</Text>
            </View>
          </View>
        </View>

        {/* Exercise Cards List */}
        <View className="flex-col gap-4">

          {/* Card 1 */}
          <TouchableOpacity
            className="bg-[#1C1C1C] rounded-xl overflow-hidden border border-white/10 flex-row items-stretch active:scale-[0.98]"
            onPress={() => navigation.navigate('ExerciseDemo' as never)}
          >
            <View className="w-1/3 min-w-[120px] relative">
              <ImageBackground
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuYJ5QcJGs2cCWmCfgz30Ox9jD79m9Lir4apC0nZSamrxQarBvAYkhPuKTU83k6gwBBX0tlfns5QvoU83i06H8m21eM4aOygS4YV_enEXIDAmmjV6n-IXdYx2HXwhmb4MFOdnsuQ05ppGvBnYRp6WUSqsmLrS4crJiH6qPACXmesole_-lKefJevYNyarEQ5QWA15GpL8QPf1gvugPgOvFuiTKWeAUeK9ym1pRY96eqA4LsSMs2o7_RHJNRKyv4wLbKSCZkgDianM" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-[#1C1C1C]/40" />
            </View>
            <View className="flex-1 p-4 justify-center">
              <View className="flex-row justify-between items-start mb-2">
                <Text className="font-h3 text-[24px] text-primary text-body-lg">Jumping Jacks</Text>
                <MaterialIcons name="play-circle-filled" size={24} color="#caf300" />
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="schedule" size={16} color="#c8c6c5" />
                <Text className="text-secondary font-label-caps text-[12px]">30 saniye</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity
            className="bg-[#1C1C1C] rounded-xl overflow-hidden border border-white/10 flex-row items-stretch active:scale-[0.98]"
            onPress={() => navigation.navigate('ExerciseDemo' as never)}
          >
            <View className="w-1/3 min-w-[120px] relative">
              <ImageBackground
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6va3X80gHxP0Mrbn8Th8A0L_I4mWtrUTTuIlksVx33BfLZMhOMTtdVQ6mbF_JDVAgUASRXE8zgUKuLajalE7DUl84u2F7R3gD1S57Gv5ic93KqtXgYhicl5RCUc4MLlKBRk5f24ksLiVjg6ik391BuDMiAGP4qDyE61gbD98ZP4ZK9mtwn8KdVfmGU4r-RaR5ZuQ7UrdAFiy-G9d8d9qjiLMxwgHsqDDLZAM4C70p0uB-s5IxgLLg4lmUTwDxwlfdeguBtZjIYdM" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-[#1C1C1C]/40" />
            </View>
            <View className="flex-1 p-4 justify-center">
              <View className="flex-row justify-between items-start mb-2">
                <Text className="font-h3 text-[24px] text-primary text-body-lg">Arm Circles</Text>
                <MaterialIcons name="play-circle-filled" size={24} color="#caf300" />
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="schedule" size={16} color="#c8c6c5" />
                <Text className="text-secondary font-label-caps text-[12px]">30 saniye</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity
            className="bg-[#1C1C1C] rounded-xl overflow-hidden border border-white/10 flex-row items-stretch active:scale-[0.98]"
            onPress={() => navigation.navigate('ExerciseDemo' as never)}
          >
            <View className="w-1/3 min-w-[120px] relative">
              <ImageBackground
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl-1M0T9F0VIp2YkjvQ7S2r0pefMLd4zZXHy4NxUvlAvv1ZlbeDgYov8L23yYg67gl5N3EkC-1bRdF-JIQoXbGjQ5JINOD44oqMLKEbuVeIN6msbxoXQ2yYEtitM6XLplW6woldSDTwx-Jr7ujqL8GOWfG95zL5WzMmXoTOyArmgqQ2Y3wh-lZrDuCfKyr1s38WPgH9SPQ4-_gV3q_H8LrlG4iMMFayf7sLr0g0cXxuRSuHga7jUOOt7c9g40K0pnD5wZv24iDOtU" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-[#1C1C1C]/40" />
            </View>
            <View className="flex-1 p-4 justify-center">
              <View className="flex-row justify-between items-start mb-2">
                <Text className="font-h3 text-[24px] text-primary text-body-lg">Neck Rotations</Text>
                <MaterialIcons name="play-circle-filled" size={24} color="#caf300" />
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="schedule" size={16} color="#c8c6c5" />
                <Text className="text-secondary font-label-caps text-[12px]">30 saniye</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity
            className="bg-[#1C1C1C] rounded-xl overflow-hidden border border-white/10 flex-row items-stretch active:scale-[0.98]"
            onPress={() => navigation.navigate('ExerciseDemo' as never)}
          >
            <View className="w-1/3 min-w-[120px] relative">
              <ImageBackground
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnfbT6JEOSSjNcaYDEbWM7u7e-XPggJrJV2UUAUYiN-8DOIYPVxIcfaaG-YTNQ5HYpcCXrBRlD104-uXGG_eSCZnXIphFjEhzbkD-kNASoerG2pD8bYGMxWAsD_wD6fmo6n_-avgXDCQ5XzE3Ob65lggu26hJ2PjJHiFyoWIxMJqMyFqrGiQBU1FsmIWVPzB9NNuTF_0zqB-lMAqJW2ifrW7W9LdQOu042kX8KYg_sKL5RYm8H6kjd20AmlVg7IoUF70xOVoQwWxU" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-[#1C1C1C]/40" />
            </View>
            <View className="flex-1 p-4 justify-center">
              <View className="flex-row justify-between items-start mb-2">
                <Text className="font-h3 text-[24px] text-primary text-body-lg">Squat Warm-up</Text>
                <MaterialIcons name="play-circle-filled" size={24} color="#caf300" />
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="schedule" size={16} color="#c8c6c5" />
                <Text className="text-secondary font-label-caps text-[12px]">30 saniye</Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Bottom Action Button */}
      <View className="absolute bottom-0 left-0 w-full p-4 pt-12 flex justify-center z-50 pb-8 bg-background/90">
        <TouchableOpacity
          className="w-full bg-primary-fixed rounded-full shadow-lg shadow-primary-fixed/20 active:scale-95 py-4"
          onPress={() => navigation.navigate('ActiveWorkout' as never)}
        >
          <Text className="text-on-primary-fixed font-lexend font-extrabold uppercase tracking-wider text-center text-[16px]">
            ISINMAYI BİTİR VE BAŞLA
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
