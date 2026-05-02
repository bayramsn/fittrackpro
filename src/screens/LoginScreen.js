import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../components/TopAppBar';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar showBack={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 px-margin pt-md"
      >
        <View className="mb-xl">
          <Text className="font-h1 text-[40px] text-primary mb-xs">Tekrar Hoş Geldin</Text>
          <Text className="font-body-lg text-secondary">Hesabına giriş yap ve antrenmanına devam et</Text>
        </View>

        <View className="flex-1 space-y-6 gap-y-4">
          <View>
            <Text className="font-label-caps text-secondary mb-2">E-POSTA</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="E-posta adresini gir"
              placeholderTextColor="#656464"
              className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="font-label-caps text-secondary mb-2">ŞİFRE</Text>
            <View className="relative justify-center">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Şifreni gir"
                placeholderTextColor="#656464"
                secureTextEntry={!showPassword}
                className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed pr-12"
              />
              <TouchableOpacity
                className="absolute right-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="#656464" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="self-end mt-2" onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text className="text-primary-fixed font-label-caps">ŞİFREMİ UNUTTUM</Text>
          </TouchableOpacity>
        </View>

        <View className="pb-xl gap-y-4">
          <Button title="Giriş Yap" onPress={() => navigation.navigate('GoalScreen')} />
          <View className="flex-row justify-center gap-x-1 mt-4">
            <Text className="text-secondary font-body-md">Hesabın yok mu?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text className="text-primary-fixed font-body-md font-bold">Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
