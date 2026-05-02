import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import TopAppBar from '../components/TopAppBar';
import Button from '../components/Button';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar showBack={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 px-margin pt-md"
      >
        <View className="mb-xl">
          <Text className="font-h1 text-[40px] text-primary mb-xs">Şifremi Unuttum</Text>
          <Text className="font-body-lg text-secondary">Sıfırlama bağlantısı için e-posta adresini gir</Text>
        </View>

        <View className="flex-1 space-y-4">
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
        </View>

        <View className="pb-xl">
          <Button title="Bağlantı Gönder" onPress={() => navigation.navigate('LoginScreen')} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
