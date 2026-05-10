import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-margin py-md">
        <View className="mb-lg items-center">
          <View className="w-24 h-24 bg-surface-container rounded-full items-center justify-center mb-4">
            <MaterialIcons name="person" size={64} color="#caf300" />
          </View>
          <Text className="font-h1 text-[24px] text-primary">Kullanıcı Adı</Text>
          <Text className="font-body-lg text-secondary">Premium Üye</Text>
        </View>

        <View className="bg-surface-container rounded-2xl overflow-hidden mb-4">
          <TouchableOpacity className="flex-row items-center justify-between p-md border-b border-white/5">
            <View className="flex-row items-center">
              <MaterialIcons name="settings" size={24} color="#fff" />
              <Text className="text-primary ml-4">Hesap Ayarları</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between p-md">
            <View className="flex-row items-center">
              <MaterialIcons name="notifications" size={24} color="#fff" />
              <Text className="text-primary ml-4">Bildirimler</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-error-container/20 p-md rounded-2xl items-center">
          <Text className="text-error font-bold">Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
