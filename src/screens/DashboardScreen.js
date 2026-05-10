import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-margin py-md">
        <View className="mb-lg">
          <Text className="font-h1 text-[32px] text-primary">Ana Sayfa</Text>
          <Text className="font-body-lg text-secondary">Bugünkü özetin</Text>
        </View>

        <View className="bg-surface-container p-md rounded-2xl mb-4">
          <Text className="text-primary font-h3 text-xl mb-sm">Bugünkü Antrenman</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-secondary">Push Day - Göğüs & Omuz</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('WorkoutActiveScreen')}
              className="bg-primary-fixed px-6 py-2 rounded-full"
            >
              <Text className="text-on-primary-fixed font-bold">Başla</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row gap-4 mb-4">
          <View className="flex-1 bg-surface-container p-md rounded-2xl">
            <MaterialIcons name="local-fire-department" size={24} color="#caf300" />
            <Text className="text-primary font-bold text-xl mt-2">1,850</Text>
            <Text className="text-secondary text-xs">Kalori</Text>
          </View>
          <View className="flex-1 bg-surface-container p-md rounded-2xl">
            <MaterialIcons name="water-drop" size={24} color="#00d1ff" />
            <Text className="text-primary font-bold text-xl mt-2">1.5L</Text>
            <Text className="text-secondary text-xs">Su</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
