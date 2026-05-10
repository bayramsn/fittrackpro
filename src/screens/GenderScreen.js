import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../components/TopAppBar';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function GenderScreen({ navigation }) {
  const [selectedGender, setSelectedGender] = useState('male');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar />

      <View className="flex-1 px-margin py-md max-w-lg mx-auto w-full">
        <ProgressBar progress={12} />

        <View className="mb-lg mt-sm">
          <Text className="font-h1 text-h1 text-primary mb-2">Cinsiyetini seç</Text>
          <Text className="font-body-lg text-body-lg text-on-surface-variant">Bu bilgi kalori hesaplaması için kullanılacaktır.</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between mb-6">

            {/* Erkek */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedGender('male')}
              className={`w-[48%] relative flex flex-col items-center justify-start p-3 rounded-xl border-2 h-[260px] ${
                selectedGender === 'male'
                  ? 'bg-surface-container-high border-primary-fixed'
                  : 'bg-surface-container border-[#ffffff10]'
              }`}
              style={selectedGender === 'male' ? {
                shadowColor: "rgba(202,243,0,0.15)",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 5,
              } : {}}
            >
              {selectedGender === 'male' && (
                <View className="absolute inset-0 bg-primary-fixed opacity-[0.03] pointer-events-none rounded-xl" />
              )}

              <View className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ${
                selectedGender === 'male' ? 'border-primary-fixed bg-primary-fixed' : 'border-outline-variant bg-black/30'
              }`}>
                {selectedGender === 'male' && <MaterialIcons name="check" size={16} color="#2a3400" />}
              </View>

              <View className="w-full h-[180px] rounded-lg overflow-hidden mb-3 relative">
                <Image
                  source={require('../../assets/images/placeholder.png')}
                  className={`w-full h-full ${selectedGender !== 'male' ? 'grayscale opacity-70' : 'opacity-100'}`}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={['transparent', selectedGender === 'male' ? '#2a2a2a' : '#201f1f']}
                  className="absolute inset-0 opacity-80"
                />
              </View>
              <Text className={`font-h3 text-[20px] mt-auto mb-2 ${
                selectedGender === 'male' ? 'text-primary' : 'text-on-surface'
              }`}>Erkek</Text>
            </TouchableOpacity>

            {/* Kadın */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedGender('female')}
              className={`w-[48%] relative flex flex-col items-center justify-start p-3 rounded-xl border-2 h-[260px] ${
                selectedGender === 'female'
                  ? 'bg-surface-container-high border-primary-fixed'
                  : 'bg-surface-container border-[#ffffff10]'
              }`}
              style={selectedGender === 'female' ? {
                shadowColor: "rgba(202,243,0,0.15)",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 5,
              } : {}}
            >
              {selectedGender === 'female' && (
                <View className="absolute inset-0 bg-primary-fixed opacity-[0.03] pointer-events-none rounded-xl" />
              )}

              <View className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ${
                selectedGender === 'female' ? 'border-primary-fixed bg-primary-fixed' : 'border-outline-variant bg-black/30'
              }`}>
                {selectedGender === 'female' && <MaterialIcons name="check" size={16} color="#2a3400" />}
              </View>

              <View className="w-full h-[180px] rounded-lg overflow-hidden mb-3 relative">
                <Image
                  source={require('../../assets/images/placeholder.png')}
                  className={`w-full h-full ${selectedGender !== 'female' ? 'grayscale opacity-70' : 'opacity-100'}`}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={['transparent', selectedGender === 'female' ? '#2a2a2a' : '#201f1f']}
                  className="absolute inset-0 opacity-80"
                />
              </View>
              <Text className={`font-h3 text-[20px] mt-auto mb-2 ${
                selectedGender === 'female' ? 'text-primary' : 'text-on-surface'
              }`}>Kadın</Text>
            </TouchableOpacity>

          </View>

          {/* Belirtmek istemiyorum */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedGender('none')}
            className={`flex-row items-center px-6 py-4 rounded-xl border ${
              selectedGender === 'none'
                ? 'bg-surface-container-high border-primary-fixed'
                : 'bg-surface-container border-[#ffffff10]'
            }`}
          >
            <View className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${
              selectedGender === 'none' ? 'border-primary-fixed' : 'border-outline-variant'
            }`}>
              {selectedGender === 'none' && <View className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />}
            </View>
            <Text className={`font-body-lg text-body-lg ${
              selectedGender === 'none' ? 'text-primary' : 'text-on-surface-variant'
            }`}>Belirtmek istemiyorum</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 px-margin pt-md pb-xl z-10"
      >
        <Button onPress={() => navigation.navigate('CurrentWeightScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
