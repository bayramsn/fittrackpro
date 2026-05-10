import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const categories = ['Tümü', 'Göğüs', 'Sırt', 'Omuz', 'Bacak', 'Kol', 'Karın'];

const exercises = [
  { id: '1', name: 'Bench Press', category: 'Göğüs', equipment: 'Barbell', level: 'Orta', pr: '100 kg' },
  { id: '2', name: 'Incline Dumbbell Press', category: 'Göğüs', equipment: 'Dumbbell', level: 'Orta', pr: '32 kg' },
  { id: '3', name: 'Lat Pulldown', category: 'Sırt', equipment: 'Machine', level: 'Başlangıç', pr: '65 kg' },
  { id: '4', name: 'Barbell Row', category: 'Sırt', equipment: 'Barbell', level: 'Orta', pr: '80 kg' },
  { id: '5', name: 'Shoulder Press', category: 'Omuz', equipment: 'Dumbbell', level: 'Orta', pr: '24 kg' },
  { id: '6', name: 'Squat', category: 'Bacak', equipment: 'Barbell', level: 'İleri', pr: '140 kg' },
  { id: '7', name: 'Leg Press', category: 'Bacak', equipment: 'Machine', level: 'Başlangıç', pr: '200 kg' },
  { id: '8', name: 'Bicep Curl', category: 'Kol', equipment: 'Dumbbell', level: 'Başlangıç', pr: '18 kg' },
  { id: '9', name: 'Tricep Extension', category: 'Kol', equipment: 'Cable', level: 'Başlangıç', pr: '25 kg' },
  { id: '10', name: 'Plank', category: 'Karın', equipment: 'Vücut Ağırlığı', level: 'Başlangıç', pr: '3 dk' },
];

export default function WorkoutsScreen({ navigation }) {
  const [activeSubTab, setActiveTab] = useState('Programs'); // Programs, Library, History
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExercises = exercises.filter(ex => {
    const matchesCategory = selectedCategory === 'Tümü' || ex.category === selectedCategory;
    const matchesSearch = ex.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderPrograms = () => (
    <View className="gap-4 pb-24">
       <TouchableOpacity className="bg-surface-container rounded-3xl overflow-hidden border border-white/5">
          <View className="h-40 bg-surface-container-highest">
             <Image source={require('../../assets/images/placeholder.png')} className="w-full h-full opacity-40" resizeMode="cover" />
             <View className="absolute inset-0 p-5 justify-end">
                <Text className="text-primary font-h1 text-2xl">Kas Kazanımı</Text>
                <Text className="text-secondary">4 Gün • Hipertrofi Odaklı</Text>
             </View>
          </View>
       </TouchableOpacity>

       <TouchableOpacity className="bg-surface-container rounded-3xl overflow-hidden border border-white/5">
          <View className="h-40 bg-surface-container-highest">
             <Image source={require('../../assets/images/placeholder.png')} className="w-full h-full opacity-40" resizeMode="cover" />
             <View className="absolute inset-0 p-5 justify-end">
                <Text className="text-primary font-h1 text-2xl">Yağ Yakımı</Text>
                <Text className="text-secondary">5 Gün • HIIT & Kuvvet</Text>
             </View>
          </View>
       </TouchableOpacity>
    </View>
  );

  const renderLibrary = () => (
    <View>
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-6">
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

        <View className="flex-col gap-3 pb-24">
          {filteredExercises.map((ex) => (
            <TouchableOpacity
              key={ex.id}
              onPress={() => navigation.navigate('ExerciseDetailScreen')}
              className="bg-surface-container p-4 rounded-2xl flex-row items-center border border-white/5"
            >
              <View className="w-12 h-12 bg-surface-variant rounded-xl items-center justify-center mr-4">
                <MaterialIcons name="fitness-center" size={24} color="#caf300" />
              </View>
              <View className="flex-1">
                <Text className="text-primary font-bold text-base">{ex.name}</Text>
                <Text className="text-on-surface-variant/60 text-xs">{ex.category} • {ex.equipment}</Text>
              </View>
              <View className="items-end">
                 <Text className="text-primary-container font-bold text-xs">{ex.pr}</Text>
                 <Text className="text-on-surface-variant/40 text-[8px] uppercase">PR</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 mb-6">
        <Text className="text-primary font-h1 text-2xl mb-6">Antrenman</Text>

        <View className="flex-row bg-surface-container rounded-2xl p-1 mb-6">
           {['Programs', 'Library'].map((tab) => (
             <TouchableOpacity
               key={tab}
               onPress={() => setActiveTab(tab)}
               className={`flex-1 py-3 rounded-xl items-center ${activeSubTab === tab ? 'bg-surface-container-high border border-white/5' : ''}`}
             >
                <Text className={`font-bold text-xs ${activeSubTab === tab ? 'text-primary' : 'text-secondary'}`}>
                   {tab === 'Programs' ? 'Programlar' : 'Kütüphane'}
                </Text>
             </TouchableOpacity>
           ))}
        </View>
      </View>

      <ScrollView className="flex-1 px-margin" showsVerticalScrollIndicator={false}>
         {activeSubTab === 'Programs' ? renderPrograms() : renderLibrary()}
      </ScrollView>
    </SafeAreaView>
  );
}
