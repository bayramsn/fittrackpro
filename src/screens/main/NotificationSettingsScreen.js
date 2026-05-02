import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Switch } from 'react-native';
import TopAppBar from '../../components/TopAppBar';

export default function NotificationSettingsScreen({ navigation }) {
  const [workout, setWorkout] = useState(true);
  const [water, setWater] = useState(true);
  const [sleep, setSleep] = useState(false);
  const [tips, setTips] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Bildirim Ayarları" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md pb-32">
         <View className="bg-surface-container rounded-2xl border border-[#ffffff10] overflow-hidden mb-8">
            <View className="p-4 flex-row items-center justify-between border-b border-[#ffffff10]">
               <View>
                  <Text className="font-h3 text-primary text-[18px]">Antrenman Hatırlatıcıları</Text>
                  <Text className="font-body-md text-secondary text-[12px]">Planlanan günlerde bildirim al.</Text>
               </View>
               <Switch value={workout} onValueChange={setWorkout} trackColor={{ false: "#353534", true: "#caf300" }} thumbColor={"#121212"} />
            </View>
            <View className="p-4 flex-row items-center justify-between border-b border-[#ffffff10]">
               <View>
                  <Text className="font-h3 text-primary text-[18px]">Su İçme Hatırlatıcısı</Text>
                  <Text className="font-body-md text-secondary text-[12px]">Gün içinde su içmen için uyarır.</Text>
               </View>
               <Switch value={water} onValueChange={setWater} trackColor={{ false: "#353534", true: "#caf300" }} thumbColor={"#121212"} />
            </View>
            <View className="p-4 flex-row items-center justify-between border-b border-[#ffffff10]">
               <View>
                  <Text className="font-h3 text-primary text-[18px]">Uyku Vakti</Text>
                  <Text className="font-body-md text-secondary text-[12px]">Hedeflenen saatten 30dk önce uyarır.</Text>
               </View>
               <Switch value={sleep} onValueChange={setSleep} trackColor={{ false: "#353534", true: "#caf300" }} thumbColor={"#121212"} />
            </View>
            <View className="p-4 flex-row items-center justify-between">
               <View>
                  <Text className="font-h3 text-primary text-[18px]">İpuçları ve Öneriler</Text>
                  <Text className="font-body-md text-secondary text-[12px]">Haftalık gelişim ipuçları.</Text>
               </View>
               <Switch value={tips} onValueChange={setTips} trackColor={{ false: "#353534", true: "#caf300" }} thumbColor={"#121212"} />
            </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
