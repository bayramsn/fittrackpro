import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function AccountSettingsScreen({ navigation }) {
  const [name, setName] = useState('Alex Doe');
  const [email, setEmail] = useState('alex@example.com');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Hesap Ayarları" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md pb-32">
         <View className="flex-col gap-6 mb-8">
            <View>
              <Text className="font-label-caps text-secondary mb-2">AD SOYAD</Text>
              <TextInput value={name} onChangeText={setName} className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
            <View>
              <Text className="font-label-caps text-secondary mb-2">E-POSTA</Text>
              <TextInput value={email} onChangeText={setEmail} className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
         </View>
         <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} className="bg-surface-container p-4 rounded-xl border border-surface-container-highest flex-row items-center justify-between">
            <Text className="font-h3 text-primary text-[18px]">Şifre Değiştir</Text>
         </TouchableOpacity>
      </ScrollView>
      <View className="p-6 border-t border-[#ffffff05]">
        <Button title="Kaydet" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
