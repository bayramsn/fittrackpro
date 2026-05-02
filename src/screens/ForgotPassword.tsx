import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [method, setMethod] = useState<'email' | 'phone'>('email');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center w-full px-6 h-16 bg-[#121212] border-b border-white/10 z-50">
        <TouchableOpacity
          className="p-2 rounded-full flex items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#D4FF00" />
        </TouchableOpacity>
        <Text className="text-xl font-black text-[#D4FF00] tracking-widest font-lexend uppercase">
          FITNESS ELITE
        </Text>
        <View className="p-2 w-10" />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 64 }}>
          <View className="w-full max-w-md mx-auto items-center">

            {/* Icon Container */}
            <View className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-10 shadow-lg border border-white/5 relative">
              <View className="absolute inset-0 rounded-full bg-primary-container opacity-10" />
              <MaterialIcons name="lock-reset" size={36} color="#caf300" className="z-10" />
            </View>

            {/* Typography */}
            <View className="text-center w-full mb-10">
              <Text className="font-h2 text-[32px] text-on-surface mb-3 text-center">Şifremi Unuttum</Text>
              <Text className="font-body-md text-[16px] text-on-surface-variant max-w-[90%] mx-auto text-center">
                Sıfırlama bağlantısı almak için tercih ettiğin yöntemi seç ve bilgilerini gir.
              </Text>
            </View>

            {/* Form Section */}
            <View className="w-full flex-col gap-6">

              {/* Input Group Toggle */}
              <View className="flex-row p-1 bg-surface-container-low rounded-xl mb-6">
                <TouchableOpacity
                  className={`flex-1 py-2 rounded-lg items-center ${method === 'email' ? 'bg-primary-container' : ''}`}
                  onPress={() => setMethod('email')}
                >
                  <Text className={`font-label-caps text-[12px] font-bold ${method === 'email' ? 'text-on-primary' : 'text-on-surface-variant'}`}>
                    EMAIL
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-1 py-2 rounded-lg items-center ${method === 'phone' ? 'bg-primary-container' : ''}`}
                  onPress={() => setMethod('phone')}
                >
                  <Text className={`font-label-caps text-[12px] font-bold ${method === 'phone' ? 'text-on-primary' : 'text-on-surface-variant'}`}>
                    TELEFON
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-col gap-6">
                {method === 'email' ? (
                  <View className="flex-col gap-1 relative">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant ml-1">Email Adresi</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="mail" size={20} color="#c5c9ac" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-high text-on-surface font-body-lg text-[18px] rounded-t-lg pl-11 pr-3 py-3 border-b-2 border-surface-bright focus:border-primary-container"
                        placeholder="ad.soyad@ornek.com"
                        placeholderTextColor="rgba(197, 201, 172, 0.4)"
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                  </View>
                ) : (
                  <View className="flex-col gap-1 relative">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant ml-1">Telefon Numarası</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="smartphone" size={20} color="#c5c9ac" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-high text-on-surface font-body-lg text-[18px] rounded-t-lg pl-11 pr-3 py-3 border-b-2 border-surface-bright focus:border-primary-container"
                        placeholder="05XX XXX XX XX"
                        placeholderTextColor="rgba(197, 201, 172, 0.4)"
                        keyboardType="phone-pad"
                      />
                    </View>
                  </View>
                )}
              </View>

              {/* Action Button */}
              <View className="pt-3">
                <TouchableOpacity className="w-full bg-primary-container rounded-full py-4 px-4 flex-row justify-center items-center gap-1 shadow-lg shadow-primary-container/20 active:scale-95">
                  <Text className="text-on-primary font-label-caps text-[12px]">BAĞLANTI GÖNDER</Text>
                  <MaterialIcons name="arrow-right-alt" size={20} color="#2a3400" />
                </TouchableOpacity>
              </View>

              {/* Secondary Action */}
              <View className="items-center pt-6">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text className="font-body-md text-[16px] text-on-surface-variant">Giriş ekranına dön</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
