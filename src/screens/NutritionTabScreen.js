import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export default function NutritionTabScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-margin py-md">
        <View className="mb-lg">
          <Text className="font-h1 text-[32px] text-primary">Beslenme</Text>
          <Text className="font-body-lg text-secondary">Öğünlerini takip et</Text>
        </View>

        <View className="bg-surface-container p-md rounded-2xl mb-4">
          <Text className="text-primary font-h3 text-xl mb-sm">Öğünler</Text>
          <Text className="text-secondary">Kahvaltı: 450 kcal</Text>
          <Text className="text-secondary">Öğle: 700 kcal</Text>
          <Text className="text-secondary">Akşam: 600 kcal</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
