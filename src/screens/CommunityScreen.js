import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const posts = [
  {
    id: '1',
    user: 'Ahmet Y.',
    avatar: null,
    content: 'Bugün harika bir Leg Day geçirdik! Yeni PR: 150kg Squat 🔥',
    image: null,
    likes: 24,
    comments: 5,
    time: '2 saat önce'
  },
  {
    id: '2',
    user: 'Selin K.',
    avatar: null,
    content: 'Yeni fit tarifimi denediniz mi? Yüksek proteinli krep favorim.',
    image: null,
    likes: 42,
    comments: 12,
    time: '5 saat önce'
  }
];

export default function CommunityScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-margin pt-4 flex-row justify-between items-center mb-6">
        <Text className="text-primary font-h1 text-2xl">Topluluk</Text>
        <TouchableOpacity className="bg-primary-fixed/20 p-2 rounded-full">
          <MaterialIcons name="person-add" size={24} color="#caf300" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Create Post */}
        <View className="px-margin mb-6">
          <View className="bg-surface-container p-4 rounded-3xl flex-row items-center border border-white/5">
             <View className="w-10 h-10 bg-surface-variant rounded-full items-center justify-center mr-3">
                <MaterialIcons name="person" size={24} color="#666" />
             </View>
             <TextInput
               placeholder="Neler düşünüyorsun?"
               placeholderTextColor="#8f9378"
               className="flex-1 text-primary"
             />
             <TouchableOpacity className="ml-2">
                <MaterialIcons name="image" size={24} color="#caf300" />
             </TouchableOpacity>
          </View>
        </View>

        {/* Feed */}
        <View className="px-margin gap-4 pb-24">
          {posts.map(post => (
            <View key={post.id} className="bg-surface-container rounded-3xl p-5 border border-white/5">
               <View className="flex-row items-center justify-between mb-4">
                  <View className="flex-row items-center">
                     <View className="w-10 h-10 bg-primary-fixed/10 rounded-full items-center justify-center mr-3">
                        <MaterialIcons name="person" size={24} color="#caf300" />
                     </View>
                     <View>
                        <Text className="text-primary font-bold">{post.user}</Text>
                        <Text className="text-on-surface-variant/40 text-[10px]">{post.time}</Text>
                     </View>
                  </View>
                  <MaterialIcons name="more-horiz" size={24} color="#666" />
               </View>

               <Text className="text-secondary leading-relaxed mb-4">{post.content}</Text>

               <View className="flex-row gap-6 border-t border-white/5 pt-4">
                  <TouchableOpacity className="flex-row items-center">
                     <MaterialIcons name="favorite-border" size={20} color="#666" />
                     <Text className="text-on-surface-variant/60 text-xs ml-1">{post.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row items-center">
                     <MaterialIcons name="chat-bubble-outline" size={20} color="#666" />
                     <Text className="text-on-surface-variant/60 text-xs ml-1">{post.comments}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row items-center">
                     <MaterialIcons name="share" size={20} color="#666" />
                  </TouchableOpacity>
               </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
