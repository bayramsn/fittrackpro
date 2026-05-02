import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ActiveWorkoutScreen({ navigation }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds) => {
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const currentExercise = {
    title: 'Bench Press (Barbell)',
    sets: [
      { id: 1, reps: 10, weight: 60, completed: true },
      { id: 2, reps: 10, weight: 65, completed: true },
      { id: 3, reps: 8, weight: 70, completed: false },
      { id: 4, reps: 6, weight: 75, completed: false },
    ]
  };

  return (
    <SafeAreaView className="flex-1 bg-background relative">
      <View className="h-[300px] w-full relative">
         <ImageBackground
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLVU9e8zJXermuOs611JG1qYBolHCKuuNgy1AhhF2aZBodJzcerv-b7NkTTqARGjtxcxJSvgLgNg5bHHCiIZXcUHGngnYoHUFDm6phwsCfTXlPkYC3oi5Z_NhNlghkD9Saswltef6vkwCLNoG2BKx6towgnL9wEcMupvk7EobYquEg5x1WluaEuNM4Y9MFAlxnLMKLh8_XcNhaMTzdlY_Qe2eIbbjZFrW5vbXX3t5pB2gzhBfU9DW70ji23HJuO3hgHDdTTne09b0' }}
            className="w-full h-full"
            resizeMode="cover"
         >
           <LinearGradient
              colors={['rgba(19,19,19,0.3)', '#131313']}
              className="absolute inset-0"
           />
           <View className="absolute top-12 left-6 z-20">
             <TouchableOpacity
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/20"
                onPress={() => navigation.goBack()}
             >
                <MaterialIcons name="keyboard-arrow-down" size={28} color="#fff" />
             </TouchableOpacity>
           </View>
           <View className="absolute inset-0 items-center justify-center pointer-events-none">
              <MaterialIcons name="play-circle-outline" size={64} color="rgba(255,255,255,0.8)" />
           </View>
         </ImageBackground>
      </View>

      <View className="flex-1 px-margin -mt-10 relative z-10">
        <View className="flex-row justify-between items-end mb-6">
          <View>
             <Text className="font-h1 text-[32px] text-primary leading-tight">{currentExercise.title}</Text>
             <Text className="font-body-md text-secondary">Göğüs • Ana Hareket</Text>
          </View>
          <TouchableOpacity className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center border border-outline-variant">
             <MaterialIcons name="swap-horiz" size={24} color="#e5e2e1" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header Row */}
          <View className="flex-row items-center justify-between mb-4 px-2">
            <Text className="w-12 font-label-caps text-secondary">SET</Text>
            <Text className="flex-1 font-label-caps text-secondary text-center">KG</Text>
            <Text className="flex-1 font-label-caps text-secondary text-center">TEKRAR</Text>
            <View className="w-12"></View>
          </View>

          {/* Sets */}
          <View className="flex-col gap-3 pb-32">
            {currentExercise.sets.map((set, idx) => (
               <View
                  key={set.id}
                  className={`flex-row items-center justify-between p-3 rounded-xl border ${set.completed ? 'bg-[rgba(202,243,0,0.05)] border-[rgba(202,243,0,0.2)]' : 'bg-surface-container border-surface-container-highest'}`}
               >
                 <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-[#ffffff10]">
                   <Text className={`font-h3 ${set.completed ? 'text-primary-fixed' : 'text-on-surface'}`}>{set.id}</Text>
                 </View>

                 <View className="flex-1 items-center justify-center bg-surface-container-high mx-2 h-12 rounded-lg">
                    <Text className={`font-h2 text-[20px] ${set.completed ? 'text-primary' : 'text-on-surface'}`}>{set.weight}</Text>
                 </View>

                 <View className="flex-1 items-center justify-center bg-surface-container-high mx-2 h-12 rounded-lg">
                    <Text className={`font-h2 text-[20px] ${set.completed ? 'text-primary' : 'text-on-surface'}`}>{set.reps}</Text>
                 </View>

                 <TouchableOpacity className={`w-12 h-12 rounded-xl flex items-center justify-center ${set.completed ? 'bg-primary-fixed' : 'bg-surface-variant'}`}>
                    <MaterialIcons name="check" size={24} color={set.completed ? '#171e00' : '#e5e2e1'} />
                 </TouchableOpacity>
               </View>
            ))}

            <TouchableOpacity className="w-full flex-row items-center justify-center py-4 bg-surface-container border border-dashed border-outline-variant rounded-xl mt-2">
               <MaterialIcons name="add" size={20} color="#c5c9ac" />
               <Text className="font-label-caps text-on-surface-variant ml-2">SET EKLE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View className="absolute bottom-0 left-0 w-full bg-surface-container border-t border-surface-container-highest px-6 py-4 flex-row items-center justify-between pb-8">
         <View className="flex-row items-center gap-3">
            <TouchableOpacity
               onPress={() => setIsActive(!isActive)}
               className={`w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-[rgba(255,180,171,0.2)]' : 'bg-surface-container-high'}`}
            >
               <MaterialIcons name={isActive ? "pause" : "play-arrow"} size={24} color={isActive ? "#ffb4ab" : "#e5e2e1"} />
            </TouchableOpacity>
            <View>
               <Text className="font-label-caps text-secondary text-[10px]">GEÇEN SÜRE</Text>
               <Text className="font-h2 text-[24px] text-primary">{formatTime(seconds)}</Text>
            </View>
         </View>

         <TouchableOpacity className="bg-primary-fixed px-8 py-4 rounded-full shadow-lg" onPress={() => navigation.goBack()}>
            <Text className="font-h3 text-on-primary-fixed">Bitir</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
