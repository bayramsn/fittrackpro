import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ImageBackground
      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsDQa0SR3uuIY8KGNGrw4m_JiL6xa7FH8UO6iDHBewNpEGq3LZxRg-a7feJmL3f5bXup8D4TNN4Y02Ucn7PPzCfcXpMrPM8U_yKzkbskT0EvzBNe2kWEGx2UODpGjynJ5bQHqdQ-R3DntQ13Q2g9YX5gow5VvT7VWvOhO2eI_qsSYOkSYEoy4oGq6HvOwCm8MY5vx2F3lTW35k8dmMrDSGRCxHzJigkNVlC84ycBRovXkqmiTFgz-S_3a0kO4fJXSSSkAddxw4iN0' }}
      className="flex-1"
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View className="absolute inset-0 bg-background/60" />

      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', paddingBottom: 40 }} keyboardShouldPersistTaps="handled">

            <TouchableOpacity
              className="absolute top-10 left-5 z-20 w-10 h-10 flex items-center justify-center bg-surface-container-high/50 rounded-full border border-white/10"
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            <View className="px-5 w-full max-w-md mx-auto flex-col gap-6">

              {/* Header Section */}
              <View className="flex-col gap-1 mb-3">
                <Text className="font-h1 text-[40px] text-primary">Giriş Yap</Text>
                <Text className="font-body-md text-[16px] text-secondary">FitTrack Pro'ya katıl ve sınırlarını zorla.</Text>
              </View>

              {/* Form Card */}
              <View className="bg-surface-container/80 rounded-xl p-6 border border-white/10 shadow-2xl flex-col gap-6">

                {/* Social Logins */}
                <View className="flex-col gap-3">
                  <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 py-3 px-4 bg-surface-container-high rounded-full border border-surface-variant active:scale-95">
                    <Image
                      source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSS0jCbHXDBVvAVpETc3LIVnqmo2mEveg1Uop7gVmFib4ESTber-uDrRR9hnEmaiA3LWw-K5DHsdbiLrW_JKK5v26RN_2fFymN9fJ9aynfyg6jz4SaCd3aMOtMLnE0lg0Zctlid_gY2TFh0lur_8b5BUfq4qhubxWdwkXMXnzawX-rAfDEr-g5ydiLZB6wyPYQGaemFz9nExV5P-ehFbYR76ZRkQhnD6K0P9N1hqwE8-NfzYKM5vqC3WFne4lX-oY7agtmUMg8iEY" }}
                      className="w-5 h-5"
                    />
                    <Text className="font-label-caps text-[12px] text-primary uppercase">Google ile Devam Et</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 py-3 px-4 bg-primary text-background rounded-full active:scale-95">
                    <MaterialIcons name="apple" size={20} color="black" />
                    <Text className="font-label-caps text-[12px] text-background uppercase">Apple ile Devam Et</Text>
                  </TouchableOpacity>
                </View>

                {/* Divider */}
                <View className="flex-row items-center gap-3 my-1">
                  <View className="h-[1px] flex-1 bg-surface-variant" />
                  <Text className="font-body-md text-[14px] text-on-surface-variant">veya e-posta ile</Text>
                  <View className="h-[1px] flex-1 bg-surface-variant" />
                </View>

                {/* Form */}
                <View className="flex-col gap-3">
                  <View className="flex-col gap-1">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant ml-1">E-posta</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="mail" size={20} color="#c5c9ac" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-lowest border-b-2 border-surface-variant text-primary font-body-md text-[16px] py-3 pl-10 pr-4 focus:border-primary-fixed"
                        placeholder="ornek@email.com"
                        placeholderTextColor="rgba(197, 201, 172, 0.5)"
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                  </View>

                  <View className="flex-col gap-1">
                    <Text className="font-label-caps text-[12px] text-on-surface-variant ml-1">Şifre</Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="lock" size={20} color="#c5c9ac" className="absolute left-3 z-10" />
                      <TextInput
                        className="w-full bg-surface-container-lowest border-b-2 border-surface-variant text-primary font-body-md text-[16px] py-3 pl-10 pr-12 focus:border-primary-fixed"
                        placeholder="••••••••"
                        placeholderTextColor="rgba(197, 201, 172, 0.5)"
                        secureTextEntry={!showPassword}
                      />
                      <TouchableOpacity
                        className="absolute right-3 z-10"
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color="#c5c9ac" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View className="flex-row items-center justify-between mt-2">
                    <TouchableOpacity
                      className="flex-row items-center gap-2"
                      onPress={() => setRememberMe(!rememberMe)}
                    >
                      <View className={`w-4 h-4 rounded border ${rememberMe ? 'bg-primary-fixed border-primary-fixed' : 'bg-surface-container-lowest border-surface-variant'} flex items-center justify-center`}>
                        {rememberMe && <MaterialIcons name="check" size={12} color="#171e00" />}
                      </View>
                      <Text className="font-body-md text-[14px] text-secondary">Beni hatırla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword' as never)}>
                      <Text className="font-body-md text-[14px] text-primary-fixed">Şifremi Unuttum?</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Primary CTA */}
                  <TouchableOpacity
                    className="w-full mt-3 py-4 px-6 bg-primary-container rounded-full active:scale-95 shadow-lg shadow-primary-container/30"
                    onPress={() => navigation.navigate('MainTabs' as never)}
                  >
                    <Text className="text-on-primary-fixed font-label-caps text-[12px] uppercase tracking-widest text-center">
                      GİRİŞ YAP
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="flex-row justify-center items-center mt-1">
                  <Text className="font-body-md text-[16px] text-secondary">Hesabın yok mu? </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
                    <Text className="font-body-md text-[16px] text-primary-fixed ml-1">Kayıt Ol</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
