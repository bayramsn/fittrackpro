import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CameraAnalysisScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 items-center justify-center">
         <MaterialIcons name="videocam" size={80} color="#caf300" opacity={0.3} />
         <Text className="text-primary font-h1 text-2xl mt-6">Kamera ile Form Analizi</Text>
         <Text className="text-secondary text-center px-12 mt-2">Bu özellik V3 güncellemesi ile aktif olacaktır. MediaPipe Pose altyapısı hazırlanmaktadır.</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-12 left-6 w-12 h-12 bg-white/10 rounded-full items-center justify-center"
      >
        <MaterialIcons name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
