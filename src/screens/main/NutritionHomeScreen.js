import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function NutritionHomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Beslenme" showBack={false} />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
         <View className="px-margin pt-md pb-xl">

           {/* Calorie Goal Circle */}
           <View className="items-center justify-center py-8 mb-4">
              <View className="w-64 h-64 rounded-full border-[16px] border-surface-container flex items-center justify-center relative">
                 {/* Simulate progress circle with simple overlay */}
                 <View className="absolute inset-0 rounded-full border-[16px] border-primary-fixed opacity-100" style={{borderLeftColor: 'transparent', borderBottomColor: 'transparent', transform: [{rotate: '45deg'}]}} />

                 <View className="items-center justify-center z-10">
                   <Text className="font-h1 text-[48px] text-primary">1850</Text>
                   <Text className="font-body-lg text-secondary">Kalan Kalori</Text>
                   <View className="flex-row items-center gap-2 mt-2 bg-surface-container-high px-3 py-1 rounded-full">
                     <MaterialIcons name="local-fire-department" size={16} color="#caf300" />
                     <Text className="font-label-caps text-primary text-[10px]">HEDEF: 2400</Text>
                   </View>
                 </View>
              </View>
           </View>

           {/* Meals */}
           <View className="flex-col gap-4">
             {['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği', 'Ara Öğün'].map((meal, idx) => (
                <View key={idx} className="bg-surface-container rounded-xl p-4 border border-[#ffffff10] flex-row items-center justify-between">
                  <View className="flex-row items-center gap-4">
                    <View className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                       <MaterialIcons name="restaurant" size={24} color="#e5e2e1" />
                    </View>
                    <View>
                      <Text className="font-h3 text-primary text-[18px] mb-1">{meal}</Text>
                      <Text className="font-body-md text-secondary text-[14px]">Önerilen: 600 kcal</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('FoodSearch')} className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shadow-lg">
                    <MaterialIcons name="add" size={24} color="#171e00" />
                  </TouchableOpacity>
                </View>
             ))}
           </View>

         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
