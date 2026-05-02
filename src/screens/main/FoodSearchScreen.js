import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function FoodSearchScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const results = [
    { title: "Yoğurt (Tam Yağlı)", portion: "100g", cal: "61 kcal", p: "3.5g", c: "4.7g", y: "3.3g" },
    { title: "Süzme Yoğurt", portion: "100g", cal: "112 kcal", p: "9g", c: "3g", y: "7g" },
    { title: "Meyveli Yoğurt", portion: "100g", cal: "95 kcal", p: "3g", c: "14g", y: "2.5g" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Besin Arama" showBack={true} />

      <View className="px-margin pt-4 pb-2">
        <View className="relative justify-center">
           <MaterialIcons name="search" size={24} color="#656464" className="absolute left-4 z-10" style={{position: 'absolute', left: 16, zIndex: 10}} />
           <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Besin veya barkod ara..."
              placeholderTextColor="#656464"
              className="bg-surface-container h-14 pl-12 pr-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed"
              autoFocus={true}
           />
           <MaterialIcons name="qr-code-scanner" size={24} color="#caf300" className="absolute right-4" style={{position: 'absolute', right: 16}} />
        </View>
      </View>

      <ScrollView className="flex-1 px-margin mt-4" showsVerticalScrollIndicator={false}>
         {search.length > 2 && (
            <View className="flex-col gap-2">
              <Text className="font-label-caps text-secondary mb-2">SONUÇLAR</Text>
              {results.map((item, idx) => (
                 <TouchableOpacity
                    key={idx}
                    onPress={() => navigation.navigate('FoodDetail')}
                    className="bg-surface-container p-4 rounded-xl border border-[#ffffff10] flex-row items-center justify-between"
                 >
                    <View className="flex-1">
                       <Text className="font-h3 text-primary text-[18px] mb-1">{item.title}</Text>
                       <Text className="font-body-md text-secondary text-[12px]">{item.portion} • {item.cal} • P: {item.p} | K: {item.c} | Y: {item.y}</Text>
                    </View>
                    <MaterialIcons name="add-circle-outline" size={28} color="#caf300" />
                 </TouchableOpacity>
              ))}
            </View>
         )}
      </ScrollView>
    </SafeAreaView>
  );
}
