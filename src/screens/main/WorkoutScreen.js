import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TopAppBar from '../../components/TopAppBar';

export default function WorkoutScreen({ navigation }) {
  const days = [
    { title: "Push Günü", subtitle: "Göğüs, Omuz, Arka Kol", duration: "60 dk", icon: "fitness-center", isCompleted: true },
    { title: "Pull Günü", subtitle: "Sırt, Ön Kol", duration: "55 dk", icon: "fitness-center", isCompleted: false },
    { title: "Bacak Günü", subtitle: "Ön Bacak, Arka Bacak, Kalf", duration: "70 dk", icon: "directions-run", isCompleted: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Antrenman Programı" showBack={false} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
         <View className="px-margin pt-md pb-xl">

           <View className="mb-lg">
              <Text className="font-h2 text-primary mb-xs text-[28px]">Bu Haftaki Planın</Text>
              <Text className="font-body-md text-secondary">3 gün antrenman, 4 gün dinlenme</Text>
           </View>

           {days.map((day, index) => (
             <TouchableOpacity onPress={() => navigation.navigate('ActiveWorkout')}
               key={index}
               activeOpacity={0.8}
               className={`w-full flex-row items-center p-md rounded-xl border mb-4 relative overflow-hidden ${day.isCompleted ? 'bg-surface-container-low border-outline-variant opacity-70' : 'bg-surface-container border-[#ffffff10]'}`}
             >
               {day.isCompleted && (
                  <View className="absolute inset-0 bg-primary-fixed opacity-5 pointer-events-none" />
               )}

               <View className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-4 ${day.isCompleted ? 'bg-[rgba(202,243,0,0.1)]' : 'bg-surface-container-highest'}`}>
                  <MaterialIcons name={day.icon} size={28} color={day.isCompleted ? '#caf300' : '#e5e2e1'} />
               </View>

               <View className="flex-1">
                 <Text className={`font-h3 text-[20px] mb-1 ${day.isCompleted ? 'text-primary' : 'text-on-surface'}`}>{day.title}</Text>
                 <Text className="font-body-md text-[14px] text-on-surface-variant line-clamp-1">{day.subtitle}</Text>
                 <View className="flex-row items-center gap-1 mt-2">
                    <MaterialIcons name="schedule" size={14} color={day.isCompleted ? '#b0d500' : '#c8c6c5'} />
                    <Text className="font-label-caps text-[10px] text-secondary">{day.duration}</Text>
                 </View>
               </View>

               {day.isCompleted ? (
                 <MaterialIcons name="check-circle" size={28} color="#caf300" />
               ) : (
                 <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                    <MaterialIcons name="chevron-right" size={24} color="#e5e2e1" />
                 </View>
               )}
             </TouchableOpacity>
           ))}

           <TouchableOpacity onPress={() => navigation.navigate('ActiveWorkout')}
              className="mt-4 bg-surface-container-high py-4 rounded-full border border-surface-variant flex-row items-center justify-center"
           >
              <MaterialIcons name="swap-horiz" size={20} color="#e5e2e1" />
              <Text className="font-label-caps text-primary ml-2">PROGRAMI DEĞİŞTİR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                 onPress={() => navigation.navigate('OneRMCalculator')}
                 className="mt-4 bg-surface-container py-4 rounded-full border border-outline-variant flex-row items-center justify-center"
              >
                 <MaterialIcons name="calculate" size={20} color="#e5e2e1" />
                 <Text className="font-label-caps text-primary ml-2">1RM HESAPLAYICI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                 onPress={() => navigation.navigate('WorkoutDelay')}
                 className="mt-4 bg-surface-container py-4 rounded-full border border-outline-variant flex-row items-center justify-center"
              >
                 <MaterialIcons name="event-busy" size={20} color="#e5e2e1" />
                 <Text className="font-label-caps text-primary ml-2">ANTRENMANI ERTELE</Text>
           </TouchableOpacity>

         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
