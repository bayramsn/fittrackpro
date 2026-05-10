import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ExerciseDetailScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="h-80 bg-surface-container-highest relative">
             <Image source={require('../../assets/images/placeholder.png')} className="w-full h-full opacity-60" />
             <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute top-12 left-6 w-10 h-10 bg-black/50 rounded-full items-center justify-center"
             >
                <MaterialIcons name="arrow-back" size={24} color="#fff" />
             </TouchableOpacity>
             <View className="absolute bottom-0 left-0 right-0 p-6">
                <Text className="text-primary font-h1 text-3xl">Bench Press</Text>
                <View className="flex-row gap-2 mt-2">
                   <View className="bg-primary-fixed/20 px-3 py-1 rounded-full">
                      <Text className="text-primary-container font-bold text-[10px]">Göğüs</Text>
                   </View>
                   <View className="bg-white/10 px-3 py-1 rounded-full">
                      <Text className="text-secondary font-bold text-[10px]">Barbell</Text>
                   </View>
                </View>
             </View>
          </View>

          <View className="p-margin">
             <Text className="text-primary font-h3 text-xl mb-4">Nasıl Yapılır?</Text>
             <Text className="text-secondary leading-relaxed mb-8">
                1. Bench sehpasına uzanın ve ayaklarınızı yere sağlam basın.{"\n"}
                2. Barı omuz genişliğinden biraz daha geniş bir açıyla kavrayın.{"\n"}
                3. Barı kontrollü bir şekilde göğsünüze indirin ve nefes vererek yukarı itin.
             </Text>

             <Text className="text-primary font-h3 text-xl mb-4">Sık Yapılan Hatalar</Text>
             <View className="bg-error-container/10 p-4 rounded-2xl border border-error/20 mb-8">
                <View className="flex-row items-center mb-2">
                   <MaterialIcons name="error-outline" size={20} color="#ffb4ab" />
                   <Text className="text-error font-bold ml-2">Dirseklerin fazla açılması</Text>
                </View>
                <Text className="text-on-error-container/60 text-xs">Omuz sakatlıklarını önlemek için dirsekleri 45 derecelik açıda tutun.</Text>
             </View>

             <TouchableOpacity className="bg-primary-fixed py-4 rounded-2xl items-center shadow-lg">
                <Text className="text-on-primary-fixed font-bold">Kendi Programına Ekle</Text>
             </TouchableOpacity>
          </View>
          <View className="pb-24" />
       </ScrollView>
    </SafeAreaView>
  );
}
