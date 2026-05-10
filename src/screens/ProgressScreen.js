import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export default function ProgressScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-margin py-md">
        <View className="mb-lg">
          <Text className="font-h1 text-[32px] text-primary">Gelişim</Text>
          <Text className="font-body-lg text-secondary">İstatistiklerin ve değişim</Text>
        </View>

        <View className="bg-surface-container p-md rounded-2xl mb-4">
          <Text className="text-primary font-h3 text-xl mb-sm">Kilo Takibi</Text>
          <Text className="text-secondary text-center py-xl">Grafik burada görünecek</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
