import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useApp } from '../context/AppContext';

export default function LoginScreen({ navigation }) {
  const { login } = useApp();

  const handleLogin = () => {
    login();
    navigation.navigate('GenderScreen');
  };
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="absolute inset-0 z-0 opacity-20">
        <ImageBackground
          source={require('../../assets/images/placeholder.png')}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 px-margin justify-center z-10">
        <View className="mb-xl">
          <Text className="font-h1 text-[40px] leading-tight text-primary mb-2">Hesap Oluştur</Text>
          <Text className="font-body-lg text-secondary">Devam etmek için bir yöntem seç</Text>
        </View>

        <View className="space-y-4">
          <TouchableOpacity className="w-full bg-white py-4 rounded-full flex-row items-center justify-center px-6">
            <MaterialIcons name="google" size={24} color="#000" />
            <Text className="text-black font-bold text-lg ml-3">Google ile devam et</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full bg-[#1877F2] py-4 rounded-full flex-row items-center justify-center px-6">
            <MaterialIcons name="facebook" size={24} color="#fff" />
            <Text className="text-white font-bold text-lg ml-3">Facebook ile devam et</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full bg-[#000] border border-surface-variant py-4 rounded-full flex-row items-center justify-center px-6">
            <MaterialIcons name="apple" size={24} color="#fff" />
            <Text className="text-white font-bold text-lg ml-3">Apple ile devam et</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            className="w-full bg-primary-fixed py-4 rounded-full flex items-center justify-center mt-8"
          >
            <Text className="text-on-primary-fixed font-bold text-lg">E-posta ile devam et</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
