import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-12">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8">
           <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text className="font-h1 text-3xl text-primary mb-2">Şifremi Unuttum</Text>
        <Text className="text-secondary mb-12">E-posta adresini gir, sana bir sıfırlama bağlantısı gönderelim.</Text>

        <View className="bg-surface-container rounded-2xl p-4 border border-white/5 mb-8">
           <Text className="text-on-surface-variant/40 text-[10px] font-bold mb-1">E-POSTA</Text>
           <TextInput
             placeholder="ornek@mail.com"
             placeholderTextColor="#444"
             className="text-primary font-medium"
           />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('EmailVerificationScreen')}
          className="bg-primary-fixed py-5 rounded-2xl items-center shadow-lg"
        >
           <Text className="text-on-primary-fixed font-bold text-lg">Gönder</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
