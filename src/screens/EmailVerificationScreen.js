import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function EmailVerificationScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-12 items-center">
        <View className="w-20 h-20 bg-primary-fixed/10 rounded-full items-center justify-center mb-8">
           <MaterialIcons name="mark-email-read" size={48} color="#caf300" />
        </View>

        <Text className="font-h1 text-3xl text-primary mb-2 text-center">E-postanı Kontrol Et</Text>
        <Text className="text-secondary text-center mb-12 px-6">Doğrulama kodunu e-posta adresine gönderdik. Lütfen aşağıdaki alana gir.</Text>

        <View className="flex-row gap-4 mb-12">
           {[1,2,3,4].map(i => (
             <View key={i} className="w-14 h-16 bg-surface-container rounded-xl border border-white/10 items-center justify-center">
                <TextInput maxLength={1} keyboardType="numeric" className="text-primary font-h1 text-2xl text-center" />
             </View>
           ))}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          className="w-full bg-primary-fixed py-5 rounded-2xl items-center shadow-lg"
        >
           <Text className="text-on-primary-fixed font-bold text-lg">Doğrula ve Devam Et</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
