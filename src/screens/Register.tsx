import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ImageBackground
      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD_ivffxU-ROY528Tlkbr0t6geN76_QDR0xw-bj84S-lzSU7qrI_O4HY6gRaJN-qtkFFu77WVpF2BWupLa_ha3VBZsJZhkUlaW1izCRp0mXvuo5VteMSl8LtRM2MPh1lunCHVuu2sJs9uCQaxn7C4rcZmQ4zl2foH5FC8TlDwdVBHRuIoSuL2RpO2R__Tg-AOTtWgUdUQ5p1jSyD4oTtPSN8BF-Ihj8RF5d15a5jasDlYe3ndNlZeA0jyf4i1YX8VBY7uji5rf6dI' }}
      className="flex-1"
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View className="absolute inset-0 bg-background/80" />

      <SafeAreaView className="flex-1">
        <TouchableOpacity
          className="absolute top-10 left-5 z-20 w-10 h-10 flex items-center justify-center bg-surface-container-high/50 rounded-full border border-white/10"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 40 }} keyboardShouldPersistTaps="handled">

            <View className="w-full max-w-md mx-auto flex-col gap-10">

              {/* Header */}
              <View className="text-center items-center flex-col gap-2">
                <Text className="font-h1 text-[40px] text-primary-container text-center">Hesap Oluştur</Text>
                <Text className="font-body-md text-[16px] text-secondary text-center">FitTrack Pro'ya katıl ve sınırlarını zorla.</Text>
              </View>

              {/* Form Card */}
              <View className="bg-surface-container-high/80 rounded-xl p-6 border border-surface-container-highest shadow-2xl flex-col gap-6">

                <View className="flex-col gap-4">
                  {/* Email Input */}
                  <View className="flex-col gap-1">
                    <Text className="font-label-caps text-[12px] text-on-surface uppercase">Email</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="mail" size={20} color="#656464" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-low border-0 rounded-lg py-3 pl-11 pr-3 text-on-surface focus:border-primary-container"
                        placeholder="ornek@email.com"
                        placeholderTextColor="#656464"
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                  </View>

                  {/* Phone Input */}
                  <View className="flex-col gap-1">
                    <Text className="font-label-caps text-[12px] text-on-surface uppercase">Telefon Numarası</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="phone" size={20} color="#656464" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-low border-0 rounded-lg py-3 pl-11 pr-3 text-on-surface focus:border-primary-container"
                        placeholder="05XX XXX XX XX"
                        placeholderTextColor="#656464"
                        keyboardType="phone-pad"
                      />
                    </View>
                  </View>

                  {/* Password Input */}
                  <View className="flex-col gap-1">
                    <Text className="font-label-caps text-[12px] text-on-surface uppercase">Şifre</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="lock" size={20} color="#656464" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-low border-0 rounded-lg py-3 pl-11 pr-11 text-on-surface focus:border-primary-container"
                        placeholder="••••••••"
                        placeholderTextColor="#656464"
                        secureTextEntry={!showPassword}
                      />
                      <TouchableOpacity
                        className="absolute right-3 z-10"
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color="#656464" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* Confirm Password Input */}
                  <View className="flex-col gap-1">
                    <Text className="font-label-caps text-[12px] text-on-surface uppercase">Şifreyi Onayla</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="lock" size={20} color="#656464" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-low border-0 rounded-lg py-3 pl-11 pr-11 text-on-surface focus:border-primary-container"
                        placeholder="••••••••"
                        placeholderTextColor="#656464"
                        secureTextEntry={!showConfirmPassword}
                      />
                      <TouchableOpacity
                        className="absolute right-3 z-10"
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <MaterialIcons name={showConfirmPassword ? "visibility" : "visibility-off"} size={20} color="#656464" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Submit Button */}
                <TouchableOpacity className="w-full bg-primary-container rounded-full py-3 mt-2 active:scale-95 shadow-lg shadow-primary-container/30">
                  <Text className="text-on-primary-container font-label-caps text-[12px] uppercase text-center">
                    HESAP OLUŞTUR
                  </Text>
                </TouchableOpacity>

                {/* Divider */}
                <View className="flex-row items-center gap-3 my-2">
                  <View className="h-px bg-surface-container-highest flex-1" />
                  <Text className="font-label-caps text-[12px] text-on-tertiary-container uppercase">Veya şununla devam et</Text>
                  <View className="h-px bg-surface-container-highest flex-1" />
                </View>

                {/* Social Logins */}
                <View className="flex-row gap-4">
                  <TouchableOpacity className="flex-1 bg-surface-container-low py-3 rounded-lg flex items-center justify-center border border-surface-container-highest active:scale-95">
                    <Text className="font-bold text-white">Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 bg-surface-container-low py-3 rounded-lg flex items-center justify-center border border-surface-container-highest active:scale-95">
                    <MaterialIcons name="apple" size={20} color="white" />
                  </TouchableOpacity>
                </View>

              </View>

              {/* Footer Link */}
              <View className="text-center mt-2 flex-row justify-center">
                <Text className="font-body-md text-[16px] text-secondary">Zaten hesabın var mı? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
                  <Text className="text-primary-container font-bold">Giriş Yap</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
