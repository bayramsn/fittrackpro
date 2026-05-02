import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function WorkoutDelayScreen({ navigation }) {
  const [selectedOpt, setSelectedOpt] = useState('tomorrow');

  const options = [
    { id: 'tomorrow', title: 'Yarına Ertele', desc: 'Program bir gün kaydırılır.' },
    { id: 'skip', title: 'Bu Antrenmanı Atla', desc: 'Sonraki planlanan antrenman ile devam edilir.' },
    { id: 'custom', title: 'Başka Bir Güne Taşı', desc: 'Takvimden tarih seç.' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Antrenmanı Ertele" showBack={true} />
      <View className="flex-1 px-margin pt-md">
        <Text className="font-h2 text-[28px] text-primary mb-2">Sorun değil!</Text>
        <Text className="font-body-md text-secondary mb-8">Dinlenmek de sürecin bir parçası. Bugünkü Push antrenmanını ne yapmak istersin?</Text>

        <View className="flex-col gap-4">
          {options.map((opt) => {
            const isSelected = selectedOpt === opt.id;
            return (
              <TouchableOpacity
                key={opt.id}
                onPress={() => setSelectedOpt(opt.id)}
                className={`p-4 rounded-xl border flex-row items-center ${isSelected ? 'bg-surface-container-high border-primary-fixed' : 'bg-surface-container border-[#ffffff10]'}`}
              >
                <View className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${isSelected ? 'border-primary-fixed' : 'border-outline-variant'}`}>
                   {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />}
                </View>
                <View className="flex-1">
                   <Text className={`font-h3 text-[18px] mb-1 ${isSelected ? 'text-primary' : 'text-on-surface'}`}>{opt.title}</Text>
                   <Text className="font-body-md text-[14px] text-secondary">{opt.desc}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <View className="p-6 border-t border-[#ffffff05]">
        <Button title="Onayla" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
