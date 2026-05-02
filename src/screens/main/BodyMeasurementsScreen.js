import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function BodyMeasurementsScreen({ navigation }) {
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [arms, setArms] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Vücut Ölçüleri Giriş" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md pb-32">
         <Text className="font-body-md text-secondary mb-8">Düzenli ölçüm almak, gelişimin en iyi göstergelerinden biridir. Ölçüleri mezura ile kasları serbest bırakarak al.</Text>

         <View className="flex-col gap-4 mb-8">
            <View>
              <Text className="font-label-caps text-secondary mb-2">GÖĞÜS (CM)</Text>
              <TextInput value={chest} onChangeText={setChest} keyboardType="numeric" placeholder="0" placeholderTextColor="#656464" className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
            <View>
              <Text className="font-label-caps text-secondary mb-2">BEL (CM)</Text>
              <TextInput value={waist} onChangeText={setWaist} keyboardType="numeric" placeholder="0" placeholderTextColor="#656464" className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
            <View>
              <Text className="font-label-caps text-secondary mb-2">KALÇA (CM)</Text>
              <TextInput value={hips} onChangeText={setHips} keyboardType="numeric" placeholder="0" placeholderTextColor="#656464" className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
            <View>
              <Text className="font-label-caps text-secondary mb-2">KOL (CM)</Text>
              <TextInput value={arms} onChangeText={setArms} keyboardType="numeric" placeholder="0" placeholderTextColor="#656464" className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed" />
            </View>
         </View>

         <View className="bg-surface-container-high p-4 rounded-xl flex-row items-center justify-between border border-[#ffffff10]">
             <View>
                <Text className="font-h3 text-primary mb-1 text-[16px]">Yağ Oranını Hesapla</Text>
                <Text className="font-body-md text-secondary text-[12px]">Ölçümlerine göre tahmin al.</Text>
             </View>
             <Button title="Hesapla" onPress={() => navigation.navigate('BodyFatCalculator')} />
         </View>
      </ScrollView>
      <View className="p-6 border-t border-[#ffffff05]">
        <Button title="Kaydet" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
