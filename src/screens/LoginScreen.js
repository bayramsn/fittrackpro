import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center px-6 py-8">
        <View className="items-center mb-10">
          <Text className="font-h1 text-[36px] text-primary mb-4">Giriş Yap / Kayıt Ol</Text>
          <Text className="font-body-md text-on-surface-variant text-center">
            Hesabına giriş yap veya yeni bir hesap oluşturarak serüvene başla.
          </Text>
        </View>
        <View className="flex flex-col gap-4">
          <TouchableOpacity
            className="w-full bg-surface-container py-4 px-6 rounded-xl border border-surface-variant flex-row items-center justify-center gap-2"
            onPress={() => navigation.navigate('GenderScreen')}
          >
            <MaterialIcons name="email" size={24} color="#caf300" />
            <Text className="text-primary font-bold text-lg">E-posta ile Devam Et</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full bg-surface-container py-4 px-6 rounded-xl border border-surface-variant flex-row items-center justify-center gap-2"
            onPress={() => navigation.navigate('GenderScreen')}
          >
            <MaterialIcons name="phone" size={24} color="#caf300" />
            <Text className="text-primary font-bold text-lg">Telefon ile Devam Et</Text>
          </TouchableOpacity>
        </View>
      </View>
      <LinearGradient
        colors={['transparent', '#131313', '#131313']}
        className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-10 z-10"
      >
        <Button title="Atla ve Devam Et" onPress={() => navigation.navigate('GenderScreen')} />
      </LinearGradient>
    </SafeAreaView>
  );
}
