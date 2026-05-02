import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../components/Button';

export default function FoodAddedSuccessScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center px-margin relative z-10">
         <View className="absolute inset-0 bg-primary-container opacity-[0.02] pointer-events-none" />

         <View className="w-32 h-32 rounded-full bg-[rgba(202,243,0,0.1)] flex items-center justify-center mb-8 border border-[rgba(202,243,0,0.2)]">
            <MaterialIcons name="check" size={64} color="#caf300" />
         </View>

         <Text className="font-h1 text-[36px] text-primary text-center mb-4">Başarıyla Eklendi!</Text>
         <Text className="font-body-md text-secondary text-center mb-8 px-4">
            150g Yoğurt (Tam Yağlı) kahvaltı öğününe kaydedildi.
         </Text>

         <View className="w-full flex-col gap-4">
            <Button title="Öğüne Git" onPress={() => navigation.navigate('MainTabs')} />
            <TouchableOpacity onPress={() => navigation.navigate('FoodSearch')} className="w-full py-4 rounded-full border border-surface-variant flex items-center justify-center">
               <Text className="text-primary font-h3">Başka Besin Ekle</Text>
            </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  );
}
