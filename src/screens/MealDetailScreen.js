import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MealDetailScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="h-64 bg-surface-container-highest relative">
             <Image source={require('../../assets/images/placeholder.png')} className="w-full h-full opacity-60" />
             <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute top-12 left-6 w-10 h-10 bg-black/50 rounded-full items-center justify-center"
             >
                <MaterialIcons name="arrow-back" size={24} color="#fff" />
             </TouchableOpacity>
          </View>

          <View className="p-margin">
             <Text className="text-primary font-h1 text-3xl mb-2">Tavuklu Fit Salata</Text>
             <Text className="text-on-surface-variant/60 mb-8">Yüksek proteinli, doyurucu öğle yemeği</Text>

             <View className="flex-row gap-3 mb-8">
                {[
                  { label: 'Kcal', val: '420' },
                  { label: 'Protein', val: '45g' },
                  { label: 'Karb', val: '12g' },
                  { label: 'Yağ', val: '18g' }
                ].map((m, i) => (
                  <View key={i} className="flex-1 bg-surface-container p-3 rounded-2xl items-center border border-white/5">
                     <Text className="text-primary font-bold">{m.val}</Text>
                     <Text className="text-on-surface-variant/40 text-[8px] uppercase">{m.label}</Text>
                  </View>
                ))}
             </View>

             <Text className="text-primary font-h3 text-xl mb-4">Malzemeler</Text>
             <View className="bg-surface-container rounded-2xl p-5 mb-8">
                {['200g Tavuk Göğsü', 'Mevsim Yeşillikleri', '10g Zeytinyağı', 'Limon Suyu'].map((ing, i) => (
                  <View key={i} className="flex-row items-center mb-2">
                     <MaterialIcons name="check" size={16} color="#caf300" />
                     <Text className="text-secondary ml-3">{ing}</Text>
                  </View>
                ))}
             </View>

             <TouchableOpacity className="bg-primary-fixed py-4 rounded-2xl items-center shadow-lg">
                <Text className="text-on-primary-fixed font-bold">Öğününe Ekle</Text>
             </TouchableOpacity>
          </View>
          <View className="pb-24" />
       </ScrollView>
    </SafeAreaView>
  );
}
