import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TopAppBar({ title = "FitTrack Pro", showBack = true, titleCentered = true, minimal = false }) {
  const navigation = useNavigation();

  return (
    <View className={`flex-row items-center w-full px-6 h-16 bg-[#121212] border-b border-[#ffffff10] ${minimal ? 'pt-4' : ''} z-50`}>
      {showBack ? (
        <TouchableOpacity
          className="w-10 h-10 flex items-center justify-center rounded-full active:opacity-80"
          onPress={() => navigation.canGoBack() && navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
      ) : (
        <View className="w-10 h-10" />
      )}

      <View className={`flex-1 ${titleCentered ? 'items-center' : 'items-start ml-2'}`}>
        <Text className={`font-h2 tracking-tight text-lg ${title === 'FitTrack Pro' ? 'text-[#D4FF00]' : 'text-primary'}`}>
          {title}
        </Text>
      </View>

      {/* Spacer to balance the flex layout */}
      <View className="w-10 h-10" />
    </View>
  );
}
