import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function AddSupplementScreen({ navigation }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Yeni Takviye Ekle" showBack={true} />

      <View className="flex-1 px-margin pt-md">
         <View className="flex-col gap-6">
            <View>
              <Text className="font-label-caps text-secondary mb-2">TAKVIYE ADI</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Örn: BCAA"
                placeholderTextColor="#656464"
                className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed"
              />
            </View>

            <View>
              <Text className="font-label-caps text-secondary mb-2">MIKTAR VE BIRIM</Text>
              <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholder="Örn: 5g, 1 Ölçek"
                placeholderTextColor="#656464"
                className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed"
              />
            </View>

            <View>
              <Text className="font-label-caps text-secondary mb-2">ALIM ZAMANI</Text>
              <TouchableOpacity className="bg-surface-container h-14 px-4 rounded-xl border border-outline-variant flex-row items-center justify-between">
                 <Text className="text-primary font-body-md">Antrenman Öncesi</Text>
                 <MaterialIcons name="keyboard-arrow-down" size={24} color="#656464" />
              </TouchableOpacity>
            </View>
         </View>
      </View>

      <View className="p-6 pb-8 border-t border-[#ffffff05]">
         <Button title="Kaydet" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
