import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function ChangePasswordScreen({ navigation }) {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Şifre Değiştir" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md pb-32">
         <View className="flex-col gap-6">
            <View>
              <Text className="font-label-caps text-secondary mb-2">MEVCUT ŞİFRE</Text>
              <TextInput secureTextEntry value={current} onChangeText={setCurrent} className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
            <View>
              <Text className="font-label-caps text-secondary mb-2">YENİ ŞİFRE</Text>
              <TextInput secureTextEntry value={newPass} onChangeText={setNewPass} className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
            <View>
              <Text className="font-label-caps text-secondary mb-2">YENİ ŞİFRE (TEKRAR)</Text>
              <TextInput secureTextEntry value={confirm} onChangeText={setConfirm} className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
         </View>
      </ScrollView>
      <View className="p-6 border-t border-[#ffffff05]">
        <Button title="Güncelle" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
