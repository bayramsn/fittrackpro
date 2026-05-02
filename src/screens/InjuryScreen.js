import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import Button from '../components/Button';

export default function InjuryScreen({ navigation }) {
  const [selectedInjuries, setSelectedInjuries] = useState([]);

  const toggleInjury = (id) => {
    if (id === 'yok') {
      setSelectedInjuries(['yok']);
    } else {
      let newInjuries = selectedInjuries.filter(i => i !== 'yok');
      if (newInjuries.includes(id)) {
        newInjuries = newInjuries.filter(i => i !== id);
      } else {
        newInjuries.push(id);
      }
      setSelectedInjuries(newInjuries);
    }
  };

  const injuries = [
    { id: 'diz', title: 'Diz', icon: 'airline-seat-legroom-extra' },
    { id: 'bel', title: 'Bel', icon: 'accessibility-new' },
    { id: 'omuz', title: 'Omuz', icon: 'fitness-center' },
    { id: 'yok', title: 'Yok', icon: 'verified-user' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 w-full max-w-lg mx-auto px-margin pt-xl pb-[120px]">
        <View className="w-full mb-lg flex-row items-center gap-2">
          <View className="h-1.5 flex-1 bg-surface-container-high rounded-full overflow-hidden">
            <View className="h-full bg-primary-fixed w-[90%] rounded-full" style={{
              shadowColor: 'rgba(202,243,0,0.5)',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 1,
              shadowRadius: 8
            }} />
          </View>
          <Text className="font-label-caps text-[12px] text-on-surface-variant ml-2">15/16</Text>
        </View>

        <View className="mb-lg">
          <Text className="font-label-caps text-[12px] text-primary-fixed mb-xs uppercase">SAKATLIK / HASSASİYET</Text>
          <Text className="font-h1 text-[40px] leading-tight text-on-surface">Herhangi bir sakatlığın var mı?</Text>
          <Text className="font-body-lg text-[18px] text-on-surface-variant mt-sm">Antrenman programını güvenliğine göre optimize edeceğiz.</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between gap-y-4">
            {injuries.map((injury) => {
              const isSelected = selectedInjuries.includes(injury.id);

              return (
                <TouchableOpacity
                  key={injury.id}
                  activeOpacity={0.8}
                  onPress={() => toggleInjury(injury.id)}
                  className={`w-[48%] h-32 rounded-xl border p-md flex flex-col items-center justify-center gap-sm transition-all ${
                    isSelected
                      ? 'bg-surface-container-highest border-primary-fixed'
                      : 'bg-surface-container border-[#ffffff10]'
                  }`}
                  style={isSelected ? {
                    shadowColor: "rgba(202,243,0,0.1)",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 15,
                    elevation: 5,
                  } : {}}
                >
                  <MaterialIcons
                    name={injury.icon}
                    size={36}
                    color={isSelected ? '#caf300' : '#c5c9ac'}
                  />
                  <Text className={`font-h3 text-[20px] ${
                    isSelected ? 'text-primary-fixed' : 'text-on-surface'
                  }`}>
                    {injury.title}
                  </Text>

                  <View className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-primary-fixed bg-primary-fixed opacity-100' : 'border-outline-variant opacity-0'
                  }`}>
                    {isSelected && <MaterialIcons name="check" size={14} color="#171e00" />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 pt-xl pb-margin px-margin z-40 flex items-center"
      >
        <Button onPress={() => navigation.navigate('ProgramRecommendationScreen')} title="Analiz Et" icon="analytics" />
      </LinearGradient>
    </SafeAreaView>
  );
}
