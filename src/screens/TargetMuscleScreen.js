import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function TargetMuscleScreen({ navigation }) {
  const [selectedMuscles, setSelectedMuscles] = useState(['omuz', 'karin']);

  const toggleMuscle = (id) => {
    if (id === 'tum_vucut') {
      setSelectedMuscles(['tum_vucut']);
    } else {
      let newMuscles = selectedMuscles.filter(m => m !== 'tum_vucut');
      if (newMuscles.includes(id)) {
        newMuscles = newMuscles.filter(m => m !== id);
      } else {
        newMuscles.push(id);
      }
      setSelectedMuscles(newMuscles);
    }
  };

  const muscles = [
    { id: 'gogus', title: 'Göğüs' },
    { id: 'sirt', title: 'Sırt' },
    { id: 'omuz', title: 'Omuz' },
    { id: 'kol', title: 'Kol' },
    { id: 'bacak', title: 'Bacak' },
    { id: 'karin', title: 'Karın' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background relative">
      <View className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2LIq0IAujtSkRhnb-UZs4sGp1yOSuQroxVzhmcfxUvnOhP_X4EGDHT6Hgre7sLz2kFxzO_vDAU9Aic_18Fax-mfNXXDxkfUXtdWIC3W4kVXohnf-Yz2rHSWDsO1MqDpS6j-VxRhTCQQmmRavS_BoaWHTKRDA2J4Y9SooG6ThMa8UdHegIFmqRzJ-rc4kzZ1lD9uREXkNyG9PVN3ey04e13GnNKH5uqLLLiv-kghu_l8mw19MtDcl9l08vdfohZqigLdxm4NxJEYA' }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <LinearGradient
            colors={['transparent', 'rgba(19,19,19,0.8)', '#131313']}
            className="absolute inset-0"
          />
        </ImageBackground>
      </View>

      <TopAppBar />

      <View className="flex-1 px-margin pt-md pb-[120px] relative z-10 max-w-lg mx-auto w-full">
        <ProgressBar progress={75} />

        <Text className="font-h2 text-[32px] text-on-surface text-center mb-xl">
          Hangi kaslarını geliştirmek istiyorsun?
        </Text>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between gap-y-4">
            {muscles.map((muscle) => {
              const isSelected = selectedMuscles.includes(muscle.id);

              return (
                <TouchableOpacity
                  key={muscle.id}
                  activeOpacity={0.8}
                  onPress={() => toggleMuscle(muscle.id)}
                  className={`w-[48%] h-28 rounded-xl border flex flex-col items-center justify-center gap-sm relative overflow-hidden ${
                    isSelected
                      ? 'bg-surface-container-high border-2 border-primary-fixed'
                      : 'bg-surface-container border-surface-variant'
                  }`}
                  style={isSelected ? {
                    shadowColor: "rgba(202,243,0,0.15)",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 15,
                    elevation: 5,
                  } : {}}
                >
                  {isSelected && (
                    <View className="absolute inset-0 bg-primary-fixed opacity-5" />
                  )}

                  <Text className={`font-h3 text-[24px] relative z-10 ${
                    isSelected ? 'text-primary-fixed' : 'text-on-surface-variant'
                  }`}>
                    {muscle.title}
                  </Text>

                  {isSelected && (
                    <MaterialIcons
                      name="check-circle"
                      size={20}
                      color="#caf300"
                      className="absolute top-3 right-3"
                      style={{ position: 'absolute', top: 12, right: 12 }}
                    />
                  )}
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => toggleMuscle('tum_vucut')}
              className={`w-full h-28 rounded-xl border flex flex-col items-center justify-center gap-sm relative overflow-hidden mt-2 ${
                selectedMuscles.includes('tum_vucut')
                  ? 'bg-surface-container-high border-2 border-primary-fixed'
                  : 'bg-surface-container border-surface-variant'
              }`}
            >
              {selectedMuscles.includes('tum_vucut') && (
                <View className="absolute inset-0 bg-primary-fixed opacity-5" />
              )}
              <Text className={`font-h3 text-[24px] relative z-10 ${
                selectedMuscles.includes('tum_vucut') ? 'text-primary-fixed' : 'text-on-surface-variant'
              }`}>
                Tüm Vücut
              </Text>
              {selectedMuscles.includes('tum_vucut') && (
                <MaterialIcons
                  name="check-circle"
                  size={20}
                  color="#caf300"
                  className="absolute top-3 right-3"
                  style={{ position: 'absolute', top: 12, right: 12 }}
                />
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', 'rgba(19,19,19,0.9)', '#131313']}
        className="absolute bottom-0 left-0 right-0 px-margin pt-md pb-8 z-40"
      >
        <View className="max-w-lg mx-auto w-full">
          <Button onPress={() => navigation.navigate('InjuryScreen')} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
