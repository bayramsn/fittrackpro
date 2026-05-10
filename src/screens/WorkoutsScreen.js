import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export default function WorkoutsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-margin py-md">
        <View className="mb-lg">
          <Text className="font-h1 text-[32px] text-primary">Antrenmanlar</Text>
          <Text className="font-body-lg text-secondary">Programın ve kütüphane</Text>
        </View>

        <View className="bg-surface-container p-md rounded-2xl mb-4">
          <Text className="text-primary font-h3 text-xl mb-sm">Haftalık Plan</Text>
          <Text className="text-secondary">Pzt: Göğüs & Omuz</Text>
          <Text className="text-secondary">Sal: Sırt & Biceps</Text>
          <Text className="text-secondary">Çar: Dinlenme</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
