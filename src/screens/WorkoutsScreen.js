import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const categories = ['Tümü', 'Göğüs', 'Sırt', 'Omuz', 'Bacak', 'Kol', 'Karın'];

const exercises = [
  { id: '1', name: 'Bench Press', category: 'Göğüs', equipment: 'Barbell', level: 'Orta' },
  { id: '2', name: 'Incline Dumbbell Press', category: 'Göğüs', equipment: 'Dumbbell', level: 'Orta' },
  { id: '3', name: 'Lat Pulldown', category: 'Sırt', equipment: 'Machine', level: 'Başlangıç' },
  { id: '4', name: 'Barbell Row', category: 'Sırt', equipment: 'Barbell', level: 'Orta' },
  { id: '5', name: 'Shoulder Press', category: 'Omuz', equipment: 'Dumbbell', level: 'Orta' },
  { id: '6', name: 'Squat', category: 'Bacak', equipment: 'Barbell', level: 'İleri' },
  { id: '7', name: 'Leg Press', category: 'Bacak', equipment: 'Machine', level: 'Başlangıç' },
  { id: '8', name: 'Bicep Curl', category: 'Kol', equipment: 'Dumbbell', level: 'Başlangıç' },
  { id: '9', name: 'Tricep Extension', category: 'Kol', equipment: 'Cable', level: 'Başlangıç' },
  { id: '10', name: 'Plank', category: 'Karın', equipment: 'Vücut Ağırlığı', level: 'Başlangıç' },
];

export default function WorkoutsScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExercises = exercises.filter(ex => {
    const matchesCategory = selectedCategory === 'Tümü' || ex.category === selectedCategory;
    const matchesSearch = ex.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 mb-6">
        <Text className="text-primary font-h1 text-2xl mb-4">Antrenman</Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-surface-container rounded-2xl px-4 py-3 border border-white/5 mb-6">
          <MaterialIcons name="search" size={20} color="#8f9378" />
          <TextInput
            placeholder="Egzersiz ara..."
            placeholderTextColor="#8f9378"
            className="flex-1 ml-3 text-primary font-body-md"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full mr-2 border ${
                selectedCategory === cat ? 'bg-primary-container border-primary-container' : 'bg-transparent border-white/10'
              }`}
            >
              <Text className={`font-bold text-xs ${selectedCategory === cat ? 'text-on-primary-fixed' : 'text-secondary'}`}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
        <Text className="text-primary font-h3 text-lg mb-4">Egzersiz Kütüphanesi</Text>

        <View className="flex-col gap-3 pb-24">
          {filteredExercises.map((ex) => (
            <TouchableOpacity
              key={ex.id}
              className="bg-surface-container p-4 rounded-2xl flex-row items-center border border-white/5"
            >
              <View className="w-12 h-12 bg-surface-variant rounded-xl items-center justify-center mr-4">
                <MaterialIcons name="fitness-center" size={24} color="#caf300" />
              </View>
              <View className="flex-1">
                <Text className="text-primary font-bold text-base">{ex.name}</Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-on-surface-variant/60 text-xs">{ex.category}</Text>
                  <View className="w-1 h-1 bg-on-surface-variant/40 rounded-full mx-2" />
                  <Text className="text-on-surface-variant/60 text-xs">{ex.equipment}</Text>
                </View>
              </View>
              <View className={`px-2 py-1 rounded bg-background border border-white/5`}>
                <Text className="text-[10px] text-secondary font-label-caps">{ex.level}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
