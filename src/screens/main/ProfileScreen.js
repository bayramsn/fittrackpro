import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function ProfileScreen({ navigation }) {
  const menuItems = [
    { title: "Hedeflerim", icon: "flag" },
    { title: "Hesap Ayarları", icon: "person" },
    { title: "Bildirim Ayarları", icon: "notifications" },
    { title: "Harici Uygulamalar", icon: "apps" },
    { title: "Çıkış Yap", icon: "logout", color: "#ffb4ab" }
  ];

  const handleNav = (title) => {
     if (title === 'Çıkış Yap') navigation.navigate('WelcomeScreen');
     else if (title === 'Hedeflerim') navigation.navigate('EditGoalsNav');
     else if (title === 'Hesap Ayarları') navigation.navigate('AccountSettings');
     else if (title === 'Bildirim Ayarları') navigation.navigate('NotificationSettings');
     else if (title === 'Harici Uygulamalar') navigation.navigate('ExternalApps');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Profil" showBack={false} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
         <View className="px-margin pt-md pb-xl">

           {/* Profile Header */}
           <View className="items-center mb-10 mt-4">
              <View className="relative">
                <View className="w-28 h-28 rounded-full bg-surface-container-high border-2 border-primary-fixed flex items-center justify-center overflow-hidden mb-4">
                   <MaterialIcons name="person" size={64} color="#656464" />
                </View>
                <TouchableOpacity className="absolute bottom-4 right-0 w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center border-2 border-background">
                  <MaterialIcons name="edit" size={16} color="#171e00" />
                </TouchableOpacity>
              </View>
              <Text className="font-h2 text-[28px] text-primary">Alex Doe</Text>
              <Text className="font-body-md text-secondary mt-1">İleri Seviye • Hedef: Kas Kazanmak</Text>
           </View>

           {/* Quick Stats */}
           <View className="flex-row justify-between mb-10 gap-x-3">
              <View className="flex-1 bg-surface-container p-4 rounded-xl items-center border border-[#ffffff10]">
                 <Text className="font-label-caps text-secondary text-[10px] mb-2">KİLO</Text>
                 <Text className="font-h2 text-primary-fixed text-[24px]">75<Text className="text-[14px]">kg</Text></Text>
              </View>
              <View className="flex-1 bg-surface-container p-4 rounded-xl items-center border border-[#ffffff10]">
                 <Text className="font-label-caps text-secondary text-[10px] mb-2">BOY</Text>
                 <Text className="font-h2 text-primary-fixed text-[24px]">180<Text className="text-[14px]">cm</Text></Text>
              </View>
              <View className="flex-1 bg-surface-container p-4 rounded-xl items-center border border-[#ffffff10]">
                 <Text className="font-label-caps text-secondary text-[10px] mb-2">ANTRENMAN</Text>
                 <Text className="font-h2 text-primary-fixed text-[24px]">24</Text>
              </View>
           </View>

           {/* Menu */}
           <View className="bg-surface-container rounded-2xl border border-[#ffffff10] overflow-hidden">
             {menuItems.map((item, idx) => (
               <TouchableOpacity
                  key={idx}
                  className={`flex-row items-center justify-between p-5 ${idx !== menuItems.length - 1 ? 'border-b border-[#ffffff10]' : ''}`}
                  onPress={() => handleNav(item.title)}
               >
                 <View className="flex-row items-center gap-4">
                    <MaterialIcons name={item.icon} size={24} color={item.color || "#e5e2e1"} />
                    <Text className={`font-h3 text-[18px] ${item.color ? 'text-error' : 'text-primary'}`}>{item.title}</Text>
                 </View>
                 <MaterialIcons name="chevron-right" size={24} color="#656464" />
               </TouchableOpacity>
             ))}
           </View>

         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
