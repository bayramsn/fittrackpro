import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';

export default function ProfileScreen({ navigation }) {
  const { user } = useApp();
  const [activeTab, setActiveTab] = useState('Profile'); // Profile, AI

  const renderProfile = () => (
    <View className="pb-24">
       <View className="mb-8 items-center">
          <View className="w-24 h-24 bg-surface-container rounded-[40px] items-center justify-center mb-4 border border-primary-fixed/20 shadow-xl">
            <MaterialIcons name="person" size={64} color="#caf300" />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-primary-fixed w-8 h-8 rounded-full items-center justify-center border-4 border-background">
               <MaterialIcons name="edit" size={16} color="#171e00" />
            </TouchableOpacity>
          </View>
          <Text className="font-h1 text-[24px] text-primary">{user.profile.name}</Text>
          <View className="flex-row items-center mt-1">
             <MaterialIcons name="workspace-premium" size={14} color="#caf300" />
             <Text className="font-body-lg text-secondary ml-1">Premium Üye</Text>
          </View>
        </View>

        <View className="flex-row gap-4 mb-8">
           <View className="flex-1 bg-surface-container p-4 rounded-3xl items-center border border-white/5">
              <Text className="text-primary-container font-h1 text-xl">{user.streak}</Text>
              <Text className="text-on-surface-variant/60 text-[10px] uppercase font-bold">Gün Streak</Text>
           </View>
           <View className="flex-1 bg-surface-container p-4 rounded-3xl items-center border border-white/5">
              <Text className="text-primary-container font-h1 text-xl">{user.xp}</Text>
              <Text className="text-on-surface-variant/60 text-[10px] uppercase font-bold">Toplam XP</Text>
           </View>
        </View>

        <View className="bg-surface-container rounded-3xl overflow-hidden mb-6 border border-white/5">
          {[
            { icon: 'stars', label: 'Başarımlar', color: '#fff', screen: 'AchievementScreen' },
            { icon: 'psychology', label: 'Koç Paneli (B2B)', color: '#fff', screen: 'CoachPanelScreen' },
            { icon: 'business', label: 'Salon Paneli (B2B)', color: '#fff', screen: 'GymPanelScreen' },
            { icon: 'admin-panel-settings', label: 'Yönetim Paneli', color: '#fff', screen: 'AdminPanelScreen' },
          ].map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate(item.screen)}
              className={`flex-row items-center justify-between p-5 ${i !== 3 ? 'border-b border-white/5' : ''}`}
            >
              <View className="flex-row items-center">
                <MaterialIcons name={item.icon} size={24} color={item.color} />
                <Text className="text-primary ml-4 font-medium">{item.label}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity className="bg-error-container/10 p-5 rounded-3xl items-center border border-error/20">
          <Text className="text-error font-bold">Çıkış Yap</Text>
        </TouchableOpacity>
    </View>
  );

  const renderAI = () => (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
       <View className="flex-1 bg-surface-container/50 rounded-3xl border border-white/5 overflow-hidden mb-24">
          <ScrollView className="flex-1 p-5">
             <View className="bg-primary-fixed/10 p-4 rounded-2xl rounded-tl-none self-start max-w-[80%] mb-4 border border-primary-fixed/20">
                <Text className="text-primary font-medium text-sm">Merhaba Bayram! Bugün antrenmanın harika geçti. Protein hedefin için akşam yemeğinde 200g tavuk göğsü eklemeyi unutma. Başka bir sorun var mı?</Text>
             </View>

             <View className="bg-surface-container-highest p-4 rounded-2xl rounded-tr-none self-end max-w-[80%] mb-4">
                <Text className="text-primary text-sm">Teşekkürler, yarınki antrenman için bir önerin var mı?</Text>
             </View>
          </ScrollView>

          <View className="p-4 border-t border-white/5 flex-row items-center gap-3">
             <TextInput
               placeholder="AI Koça sor..."
               placeholderTextColor="#8f9378"
               className="flex-1 bg-surface-container rounded-full px-5 py-3 text-primary"
             />
             <TouchableOpacity className="w-12 h-12 bg-primary-fixed rounded-full items-center justify-center">
                <MaterialIcons name="send" size={24} color="#171e00" />
             </TouchableOpacity>
          </View>
       </View>
    </KeyboardAvoidingView>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 mb-6">
        <Text className="text-primary font-h1 text-2xl mb-6">Profil & AI</Text>

        <View className="flex-row bg-surface-container rounded-2xl p-1 mb-6">
           {[
             { id: 'Profile', label: 'Profil' },
             { id: 'AI', label: 'AI Koç' }
           ].map((tab) => (
             <TouchableOpacity
               key={tab.id}
               onPress={() => setActiveTab(tab.id)}
               className={`flex-1 py-3 rounded-xl items-center ${activeTab === tab.id ? 'bg-surface-container-high border border-white/5' : ''}`}
             >
                <Text className={`font-bold text-xs ${activeTab === tab.id ? 'text-primary' : 'text-secondary'}`}>
                   {tab.label}
                </Text>
             </TouchableOpacity>
           ))}
        </View>
      </View>

      <View className="flex-1 px-margin">
         {activeTab === 'Profile' ? renderProfile() : renderAI()}
      </View>
    </SafeAreaView>
  );
}
