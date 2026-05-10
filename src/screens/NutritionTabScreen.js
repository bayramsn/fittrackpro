import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';

const mealCategories = [
  { id: 'breakfast', title: 'Kahvaltı', icon: 'wb-sunny', color: '#ffcc00' },
  { id: 'lunch', title: 'Öğle Yemeği', icon: 'sunny', color: '#ff8c00' },
  { id: 'dinner', title: 'Akşam Yemeği', icon: 'nights-stay', color: '#5ac8fa' },
  { id: 'snacks', title: 'Atıştırmalık', icon: 'bakery-dining', color: '#ff2d55' },
];

export default function NutritionTabScreen() {
  const { dailyStats, logWater } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-margin pt-4 mb-6">
          <Text className="text-primary font-h1 text-2xl mb-4">Beslenme</Text>

          {/* Summary Card */}
          <View className="bg-surface-container p-6 rounded-[32px] border border-white/5 mb-8">
            <View className="flex-row justify-between items-center mb-6">
              <View>
                <Text className="text-on-surface-variant/60 font-label-caps text-[10px] mb-1">ALINAN KALORİ</Text>
                <Text className="text-primary font-h1 text-3xl">{dailyStats.calories.consumed}</Text>
              </View>
              <View className="items-end">
                <Text className="text-on-surface-variant/60 font-label-caps text-[10px] mb-1">HEDEF</Text>
                <Text className="text-secondary font-h1 text-3xl">{dailyStats.calories.goal}</Text>
              </View>
            </View>
            <View className="h-2 bg-background rounded-full overflow-hidden">
              <View
                className="h-full bg-primary-container"
                style={{ width: `${(dailyStats.calories.consumed / dailyStats.calories.goal) * 100}%` }}
              />
            </View>
          </View>

          {/* Water Tracker */}
          <View className="bg-[#00d1ff20] p-5 rounded-3xl border border-[#00d1ff30] mb-8 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-[#00d1ff] rounded-2xl items-center justify-center mr-4">
                <MaterialIcons name="water-drop" size={28} color="#fff" />
              </View>
              <View>
                <Text className="text-primary font-bold text-lg">{dailyStats.water.consumed} ml</Text>
                <Text className="text-[#00d1ff] text-xs">Hedef: {dailyStats.water.goal} ml</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => logWater(250)}
              className="bg-[#00d1ff] w-10 h-10 rounded-full items-center justify-center"
            >
              <MaterialIcons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Meals Section */}
          <Text className="text-primary font-h3 text-lg mb-4">Öğünler</Text>
          <View className="flex-col gap-4 mb-12">
            {mealCategories.map((meal) => (
              <TouchableOpacity
                key={meal.id}
                className="bg-surface-container p-5 rounded-3xl border border-white/5 flex-row items-center"
              >
                <View className="w-12 h-12 rounded-2xl items-center justify-center mr-4" style={{ backgroundColor: `${meal.color}20` }}>
                  <MaterialIcons name={meal.icon} size={24} color={meal.color} />
                </View>
                <View className="flex-1">
                  <Text className="text-primary font-bold text-base">{meal.title}</Text>
                  <Text className="text-on-surface-variant/40 text-xs mt-1">Yemek eklemek için dokun</Text>
                </View>
                <TouchableOpacity className="w-8 h-8 bg-surface-container-highest rounded-full items-center justify-center">
                   <MaterialIcons name="add" size={20} color="#fff" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
