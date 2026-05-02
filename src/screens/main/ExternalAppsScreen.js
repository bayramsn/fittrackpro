import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function ExternalAppsScreen({ navigation }) {
  const [health, setHealth] = useState(true);
  const [strava, setStrava] = useState(false);
  const [spotify, setSpotify] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Harici Uygulamalar" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md pb-32">
         <Text className="font-body-md text-secondary mb-8 leading-snug">Uygulamalarını bağlayarak antrenman, adım ve kalori verilerini senkronize et.</Text>
         <View className="bg-surface-container rounded-2xl border border-[#ffffff10] overflow-hidden mb-8">
            <View className="p-4 flex-row items-center justify-between border-b border-[#ffffff10]">
               <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                     <MaterialIcons name="favorite" size={20} color="#ffb4ab" />
                  </View>
                  <Text className="font-h3 text-primary text-[18px]">Apple Health</Text>
               </View>
               <Switch value={health} onValueChange={setHealth} trackColor={{ false: "#353534", true: "#caf300" }} thumbColor={"#121212"} />
            </View>
            <View className="p-4 flex-row items-center justify-between border-b border-[#ffffff10]">
               <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                     <MaterialIcons name="directions-run" size={20} color="#fc4c02" />
                  </View>
                  <Text className="font-h3 text-primary text-[18px]">Strava</Text>
               </View>
               <Switch value={strava} onValueChange={setStrava} trackColor={{ false: "#353534", true: "#caf300" }} thumbColor={"#121212"} />
            </View>
            <View className="p-4 flex-row items-center justify-between">
               <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                     <MaterialIcons name="headset" size={20} color="#1db954" />
                  </View>
                  <Text className="font-h3 text-primary text-[18px]">Spotify</Text>
               </View>
               <Switch value={spotify} onValueChange={setSpotify} trackColor={{ false: "#353534", true: "#caf300" }} thumbColor={"#121212"} />
            </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
