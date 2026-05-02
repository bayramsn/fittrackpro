import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function VideoPlayerScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row items-center justify-between p-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
           <MaterialIcons name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <Text className="font-h3 text-white">Göğüs Açma (Video)</Text>
        <View className="w-10 h-10" />
      </View>
      <View className="flex-1 items-center justify-center">
        <MaterialIcons name="play-circle-outline" size={80} color="rgba(255,255,255,0.8)" />
      </View>
    </SafeAreaView>
  );
}
