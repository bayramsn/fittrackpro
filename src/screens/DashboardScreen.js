import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useApp } from '../context/AppContext';

const { width } = Dimensions.get('window');

const MacroItem = ({ label, current, goal, color, icon }) => {
  const progress = Math.min(current / goal, 1);
  return (
    <View className="flex-1 bg-surface-container-high p-3 rounded-2xl border border-white/5">
      <View className="flex-row items-center mb-2">
        <MaterialIcons name={icon} size={16} color={color} />
        <Text className="text-secondary text-[10px] font-label-caps ml-1">{label}</Text>
      </View>
      <Text className="text-primary font-h3 text-lg mb-1">{current}g</Text>
      <View className="h-1 bg-background rounded-full overflow-hidden">
        <View className="h-full" style={{ width: `${progress * 100}%`, backgroundColor: color }} />
      </View>
      <Text className="text-on-surface-variant/40 text-[10px] mt-1">Hedef: {goal}g</Text>
    </View>
  );
};

export default function DashboardScreen({ navigation }) {
  const { dailyStats, logWater } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-margin pt-4 mb-8 flex-row justify-between items-center">
          <View>
            <Text className="text-on-surface-variant font-body-md">Merhaba Bayram 👋</Text>
            <Text className="text-primary font-h1 text-2xl">FitTrack Pro</Text>
          </View>
          <TouchableOpacity className="w-10 h-10 bg-surface-container rounded-full items-center justify-center border border-white/10">
            <MaterialIcons name="notifications-none" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Main Calorie Card */}
        <View className="px-margin mb-8">
          <LinearGradient
            colors={['#2a2a2a', '#1a1a1a']}
            className="p-6 rounded-[32px] border border-primary-container/20 relative overflow-hidden"
          >
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-secondary font-label-caps text-xs mb-1">KALAN KALORİ</Text>
                <Text className="text-primary-container font-h1 text-4xl">
                  {dailyStats.calories.goal - dailyStats.calories.consumed}
                </Text>
                <Text className="text-on-surface-variant/60 text-xs mt-1">
                  Hedef: {dailyStats.calories.goal} kcal
                </Text>
              </View>
              <View className="w-24 h-24 items-center justify-center">
                 {/* Simple Circular Progress Placeholder */}
                 <View className="w-full h-full rounded-full border-4 border-background items-center justify-center">
                    <View className="absolute inset-0 rounded-full border-4 border-primary-container opacity-20" />
                    <MaterialIcons name="local-fire-department" size={32} color="#caf300" />
                 </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Macros */}
        <View className="px-margin flex-row gap-3 mb-8">
          <MacroItem label="PROTEİN" current={dailyStats.protein.consumed} goal={dailyStats.protein.goal} color="#caf300" icon="egg-alt" />
          <MacroItem label="KARB" current={dailyStats.carbs.consumed} goal={dailyStats.carbs.goal} color="#00d1ff" icon="restaurant" />
          <MacroItem label="YAĞ" current={dailyStats.fat.consumed} goal={dailyStats.fat.goal} color="#ff8c00" icon="opacity" />
        </View>

        {/* Quick Actions */}
        <View className="px-margin mb-8">
          <Text className="text-primary font-h3 text-lg mb-4">Hızlı Aksiyonlar</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            <TouchableOpacity
              onPress={() => logWater(250)}
              className="bg-surface-container p-4 rounded-2xl items-center justify-center mr-3 border border-white/5 w-24"
            >
              <MaterialIcons name="water-drop" size={24} color="#00d1ff" />
              <Text className="text-primary text-[10px] font-bold mt-2 text-center">Su Ekle</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surface-container p-4 rounded-2xl items-center justify-center mr-3 border border-white/5 w-24">
              <MaterialIcons name="add-a-photo" size={24} color="#caf300" />
              <Text className="text-primary text-[10px] font-bold mt-2 text-center">Fotoğraf</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surface-container p-4 rounded-2xl items-center justify-center mr-3 border border-white/5 w-24">
              <MaterialIcons name="monitor-weight" size={24} color="#c8c6c5" />
              <Text className="text-primary text-[10px] font-bold mt-2 text-center">Kilo Gir</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surface-container p-4 rounded-2xl items-center justify-center border border-white/5 w-24">
              <MaterialIcons name="psychology" size={24} color="#e4e2e1" />
              <Text className="text-primary text-[10px] font-bold mt-2 text-center">AI Koç</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Today's Workout */}
        <View className="px-margin mb-12">
           <Text className="text-primary font-h3 text-lg mb-4">Bugünkü Antrenman</Text>
           <TouchableOpacity
            onPress={() => navigation.navigate('WorkoutActiveScreen')}
            activeOpacity={0.9}
            className="bg-surface-container rounded-3xl overflow-hidden border border-white/5"
           >
              <View className="p-5 flex-row items-center">
                <View className="w-16 h-16 bg-primary-container rounded-2xl items-center justify-center">
                  <MaterialIcons name="fitness-center" size={32} color="#171e00" />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-primary font-h3 text-xl">Push Day</Text>
                  <Text className="text-secondary text-sm">Göğüs, Omuz, Triceps</Text>
                </View>
                <View className="bg-primary-fixed/10 px-4 py-2 rounded-full">
                  <Text className="text-primary-container font-bold text-xs">Başlat</Text>
                </View>
              </View>
              <View className="bg-white/5 px-5 py-3 flex-row justify-between">
                <View className="flex-row items-center">
                  <MaterialIcons name="timer" size={14} color="#8f9378" />
                  <Text className="text-on-surface-variant/60 text-[10px] ml-1">45-60 Dakika</Text>
                </View>
                <View className="flex-row items-center">
                  <MaterialIcons name="bolt" size={14} color="#8f9378" />
                  <Text className="text-on-surface-variant/60 text-[10px] ml-1">Orta Seviye</Text>
                </View>
              </View>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
