import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-background relative overflow-hidden">
      <View className="absolute inset-0 z-0">
        <ImageBackground
          source={require('../../assets/images/placeholder.png')}
          className="w-full h-full"
          resizeMode="cover"
        >
          <LinearGradient
            colors={['transparent', 'rgba(19,19,19,0.6)', '#131313']}
            className="absolute inset-0"
          />
        </ImageBackground>
      </View>

      <SafeAreaView className="flex-1 justify-end z-20 pb-xl px-margin">
        <View className="w-full max-w-lg mx-auto flex-col">
          <View className="flex-col mb-lg">
            <Text className="font-h1 text-[40px] text-primary mb-2 shadow-lg leading-tight tracking-tight">
              FitTrack Pro’ya{'\n'}Hoş Geldin
            </Text>
            <Text className="font-body-lg text-body-lg text-secondary">
              Sana özel antrenman ve beslenme planı oluşturalım
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('GoalScreen')}
            className="w-full bg-primary-fixed py-4 rounded-full flex items-center justify-center shadow-lg mt-8"
            style={{
              shadowColor: "rgba(202,243,0,0.25)",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 1,
              shadowRadius: 15,
              elevation: 10,
            }}
          >
            <Text className="text-on-primary-fixed font-h3 text-h3">Başla</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
