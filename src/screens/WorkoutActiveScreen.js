import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function WorkoutActiveScreen({ navigation }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Background/Video Placeholder */}
      <View className="absolute inset-0 bg-surface-container-lowest">
        <Image
          source={require('../../assets/images/placeholder.png')}
          className="w-full h-full opacity-20"
          resizeMode="cover"
        />
      </View>

      {/* Timer Display */}
      <View className="flex-1 items-center pt-24 z-10">
        <Text className="text-on-surface-variant font-label-caps text-lg mb-2">ANTRENMAN SÜRESİ</Text>
        <Text className="text-primary-container font-h1 text-7xl tracking-tighter shadow-lg">
          {formatTime(seconds)}
        </Text>
      </View>

      {/* Floating Video Overlay (Bottom Right) */}
      <View className="absolute bottom-32 right-6 w-40 h-72 rounded-2xl border-2 border-primary-fixed overflow-hidden bg-black shadow-2xl z-20">
         <Image
          source={require('../../assets/images/placeholder.png')}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 items-center justify-center bg-black/40">
           <MaterialIcons name="play-circle-outline" size={48} color="#caf300" />
           <Text className="text-primary-container font-bold text-[10px] mt-2">VIDEO OYNATILIYOR</Text>
        </View>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          className="absolute inset-0"
        />
      </View>

      {/* Controls */}
      <View className="px-margin pb-12 z-10">
        <View className="flex-row gap-4">
          <TouchableOpacity
            onPress={() => setIsActive(!isActive)}
            className={`flex-1 py-4 rounded-full flex items-center justify-center ${isActive ? 'bg-surface-container-high border border-primary-fixed/30' : 'bg-primary-fixed'}`}
          >
            <Text className={`font-bold text-lg ${isActive ? 'text-primary' : 'text-on-primary-fixed'}`}>
              {isActive ? 'Durdur' : 'Devam Et'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-1 bg-error-container/20 border border-error/30 py-4 rounded-full flex items-center justify-center"
          >
            <Text className="text-error font-bold text-lg">Bitir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
