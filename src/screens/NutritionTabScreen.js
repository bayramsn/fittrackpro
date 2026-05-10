import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';

const mealCategories = [
  { id: 'breakfast', title: 'Kahvaltı', icon: 'wb-sunny', color: '#ffcc00', items: ['Yulaf Ezmesi', 'Yumurta'] },
  { id: 'lunch', title: 'Öğle Yemeği', icon: 'sunny', color: '#ff8c00', items: ['Tavuk Pilav'] },
  { id: 'dinner', title: 'Akşam Yemeği', icon: 'nights-stay', color: '#5ac8fa', items: [] },
  { id: 'snacks', title: 'Atıştırmalık', icon: 'bakery-dining', color: '#ff2d55', items: [] },
];

const recipes = [
  { id: '1', title: 'Yüksek Proteinli Fit Krep', kcal: '350', protein: '30g', time: '15 dk' },
  { id: '2', title: 'Pratik Tavuklu Salata', kcal: '420', protein: '45g', time: '10 dk' },
  { id: '3', title: 'Fıstık Ezmeli Bar', kcal: '280', protein: '12g', time: '20 dk' },
];

export default function NutritionTabScreen() {
  const { dailyStats, logWater } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('Log'); // Log, Recipes

  const renderLog = () => (
    <View className="pb-24">
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
            <View className="flex-row justify-between mt-4">
               <View className="items-center">
                  <Text className="text-primary font-bold">{dailyStats.protein.consumed}g</Text>
                  <Text className="text-on-surface-variant/40 text-[8px] uppercase">Protein</Text>
               </View>
               <View className="items-center">
                  <Text className="text-primary font-bold">{dailyStats.carbs.consumed}g</Text>
                  <Text className="text-on-surface-variant/40 text-[8px] uppercase">Karb</Text>
               </View>
               <View className="items-center">
                  <Text className="text-primary font-bold">{dailyStats.fat.consumed}g</Text>
                  <Text className="text-on-surface-variant/40 text-[8px] uppercase">Yağ</Text>
               </View>
            </View>
        </View>

        {/* Water Tracker */}
        <View className="bg-[#00d1ff10] p-5 rounded-3xl border border-[#00d1ff20] mb-8 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <MaterialIcons name="water-drop" size={24} color="#00d1ff" />
              <View className="ml-3">
                <Text className="text-primary font-bold text-base">{dailyStats.water.consumed} ml</Text>
                <Text className="text-[#00d1ff] text-[10px]">Hedef: {dailyStats.water.goal} ml</Text>
              </View>
            </View>
            <View className="flex-row gap-2">
               <TouchableOpacity onPress={() => logWater(250)} className="bg-[#00d1ff]/20 px-3 py-1.5 rounded-lg">
                  <Text className="text-[#00d1ff] font-bold text-[10px]">+250ml</Text>
               </TouchableOpacity>
            </View>
        </View>

        {/* Meals Section */}
        <Text className="text-primary font-h3 text-lg mb-4">Öğünler</Text>
        <View className="flex-col gap-4">
            {mealCategories.map((meal) => (
              <View key={meal.id} className="bg-surface-container rounded-3xl border border-white/5 overflow-hidden">
                <TouchableOpacity className="p-5 flex-row items-center">
                  <View className="w-10 h-10 rounded-xl items-center justify-center mr-4" style={{ backgroundColor: `${meal.color}20` }}>
                    <MaterialIcons name={meal.icon} size={20} color={meal.color} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-primary font-bold text-base">{meal.title}</Text>
                    <Text className="text-on-surface-variant/40 text-xs">{meal.items.length > 0 ? meal.items.join(', ') : 'Kayıt yok'}</Text>
                  </View>
                  <TouchableOpacity className="w-8 h-8 bg-surface-container-highest rounded-full items-center justify-center">
                    <MaterialIcons name="add" size={20} color="#fff" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            ))}
        </View>
    </View>
  );

  const renderRecipes = () => (
    <View className="pb-24">
       {recipes.map(recipe => (
         <TouchableOpacity key={recipe.id} className="bg-surface-container rounded-3xl mb-4 overflow-hidden border border-white/5">
            <View className="h-48 bg-surface-container-highest">
               <Image source={require('../../assets/images/placeholder.png')} className="w-full h-full opacity-40" />
               <View className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full flex-row items-center">
                  <MaterialIcons name="timer" size={14} color="#fff" />
                  <Text className="text-white text-[10px] ml-1 font-bold">{recipe.time}</Text>
               </View>
            </View>
            <View className="p-5">
               <Text className="text-primary font-h3 text-lg mb-2">{recipe.title}</Text>
               <View className="flex-row gap-3">
                  <View className="bg-primary-fixed/10 px-2 py-1 rounded">
                     <Text className="text-primary-container text-[10px] font-bold">{recipe.kcal} kcal</Text>
                  </View>
                  <View className="bg-white/5 px-2 py-1 rounded">
                     <Text className="text-secondary text-[10px] font-bold">{recipe.protein} protein</Text>
                  </View>
               </View>
            </View>
         </TouchableOpacity>
       ))}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 mb-6">
        <Text className="text-primary font-h1 text-2xl mb-6">Beslenme</Text>

        <View className="flex-row bg-surface-container rounded-2xl p-1 mb-6">
           {['Log', 'Recipes'].map((tab) => (
             <TouchableOpacity
               key={tab}
               onPress={() => setActiveSubTab(tab)}
               className={`flex-1 py-3 rounded-xl items-center ${activeSubTab === tab ? 'bg-surface-container-high border border-white/5' : ''}`}
             >
                <Text className={`font-bold text-xs ${activeSubTab === tab ? 'text-primary' : 'text-secondary'}`}>
                   {tab === 'Log' ? 'Günlük Takip' : 'Fit Tarifler'}
                </Text>
             </TouchableOpacity>
           ))}
        </View>
      </View>

      <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
         {activeSubTab === 'Log' ? renderLog() : renderRecipes()}
      </ScrollView>
    </SafeAreaView>
  );
}
