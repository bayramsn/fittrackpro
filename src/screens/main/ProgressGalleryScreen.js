import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function ProgressGalleryScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Görsel Gelişim Galerisi" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md">
         <View className="mb-lg flex-row justify-between items-end">
            <View>
               <Text className="font-h2 text-[24px] text-primary">Değişimi Gör</Text>
               <Text className="font-body-md text-secondary mt-1">Önce / Sonra fotoğrafların</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center">
               <MaterialIcons name="add-a-photo" size={20} color="#171e00" />
            </TouchableOpacity>
         </View>

         <View className="flex-col gap-6">
            <View>
               <Text className="font-label-caps text-secondary mb-3">BU AY</Text>
               <View className="flex-row gap-4">
                  <View className="flex-1 aspect-[3/4] bg-surface-container rounded-xl overflow-hidden border border-[#ffffff10] items-center justify-center relative">
                     <MaterialIcons name="image" size={40} color="#656464" />
                     <View className="absolute bottom-0 w-full bg-black/60 p-2"><Text className="font-label-caps text-center text-white">15 Mayıs</Text></View>
                  </View>
                  <View className="flex-1 aspect-[3/4] bg-surface-container rounded-xl overflow-hidden border border-primary-fixed items-center justify-center relative">
                     <MaterialIcons name="image" size={40} color="#656464" />
                     <View className="absolute bottom-0 w-full bg-primary-fixed p-2"><Text className="font-label-caps text-center text-on-primary-fixed">Bugün</Text></View>
                  </View>
               </View>
            </View>

            <View>
               <Text className="font-label-caps text-secondary mb-3">GEÇEN AY</Text>
               <View className="flex-row gap-4">
                  <View className="w-[45%] aspect-[3/4] bg-surface-container rounded-xl overflow-hidden border border-[#ffffff10] items-center justify-center relative opacity-70">
                     <MaterialIcons name="image" size={40} color="#656464" />
                     <View className="absolute bottom-0 w-full bg-black/60 p-2"><Text className="font-label-caps text-center text-white">1 Nisan</Text></View>
                  </View>
                  <View className="w-[45%] aspect-[3/4] bg-surface-container rounded-xl overflow-hidden border border-[#ffffff10] items-center justify-center relative opacity-70">
                     <MaterialIcons name="image" size={40} color="#656464" />
                     <View className="absolute bottom-0 w-full bg-black/60 p-2"><Text className="font-label-caps text-center text-white">15 Nisan</Text></View>
                  </View>
               </View>
            </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
