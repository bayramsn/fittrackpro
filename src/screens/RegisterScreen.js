import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../components/TopAppBar';
import Button from '../components/Button';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-lg mt-2">
            <Text className="font-h1 text-[40px] text-primary mb-xs">Kayıt Ol</Text>
            <Text className="font-body-lg text-secondary">FitTrack Pro ile yeni bir başlangıç yap</Text>
          </View>

          <View className="space-y-6 gap-y-4 mb-8">
            <View>
              <Text className="font-label-caps text-secondary mb-2">AD SOYAD</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Adını ve soyadını gir"
                placeholderTextColor="#656464"
                className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed"
              />
            </View>

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
                  placeholder="Güçlü bir şifre oluştur"
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
          </View>
        </ScrollView>

        <View className="pb-xl gap-y-4 pt-4 border-t border-[#ffffff10]">
          <Button title="Kayıt Ol" onPress={() => navigation.navigate('MainTabs')} />
          <View className="flex-row justify-center gap-x-1 mt-4">
            <Text className="text-secondary font-body-md">Zaten hesabın var mı?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text className="text-primary-fixed font-body-md font-bold">Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
