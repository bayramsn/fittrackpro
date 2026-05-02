import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import Button from '../../components/Button';

export default function OneRMCalculatorScreen({ navigation }) {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const calculate1RM = () => {
    const w = parseFloat(weight);
    const r = parseFloat(reps);
    if (!w || !r) return 0;
    // Epley formula
    return Math.round(w * (1 + r / 30));
  };

  const rm = calculate1RM();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="1RM Hesaplayıcı" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md">
         <Text className="font-body-md text-secondary mb-8 leading-snug">Bir harekette tek seferde kaldırabileceğin maksimum ağırlığı (1RM) ve çalışma yüzdelerini hesapla.</Text>

         <View className="flex-row justify-between mb-8 gap-x-4">
            <View className="flex-1">
              <Text className="font-label-caps text-secondary mb-2">AĞIRLIK (KG)</Text>
              <TextInput
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
                placeholder="Örn: 80"
                placeholderTextColor="#656464"
                className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed text-center"
              />
            </View>
            <View className="flex-1">
              <Text className="font-label-caps text-secondary mb-2">TEKRAR</Text>
              <TextInput
                value={reps}
                onChangeText={setReps}
                keyboardType="numeric"
                placeholder="Örn: 5"
                placeholderTextColor="#656464"
                className="bg-surface-container h-14 px-4 rounded-xl text-primary font-body-md border border-outline-variant focus:border-primary-fixed text-center"
              />
            </View>
         </View>

         <View className="bg-primary-container p-6 rounded-2xl items-center justify-center mb-8 shadow-lg shadow-[rgba(202,243,0,0.3)]">
            <Text className="font-label-caps text-on-primary-container mb-2 opacity-80">TAHMİNİ 1RM</Text>
            <View className="flex-row items-baseline">
               <Text className="font-h1 text-[64px] text-on-primary-container">{rm || '-'}</Text>
               <Text className="font-h3 text-on-primary-container ml-2 opacity-80">kg</Text>
            </View>
         </View>

         {rm > 0 && (
            <View className="bg-surface-container rounded-xl border border-[#ffffff10] p-4 flex-col gap-4 mb-10">
               <Text className="font-h3 text-primary text-[18px] mb-2">Çalışma Yüzdeleri</Text>
               {[
                 { p: 95, reps: 2, focus: "Maksimum Güç" },
                 { p: 90, reps: 4, focus: "Güç" },
                 { p: 85, reps: 6, focus: "Güç / Hipertrofi" },
                 { p: 80, reps: 8, focus: "Hipertrofi" },
                 { p: 75, reps: 10, focus: "Hipertrofi" },
                 { p: 70, reps: 12, focus: "Dayanıklılık" }
               ].map((item, idx) => (
                 <View key={idx} className="flex-row items-center justify-between border-b border-[#ffffff05] pb-3">
                    <View>
                      <Text className="font-h3 text-primary">{item.p}% <Text className="text-secondary font-body-md">({Math.round(rm * (item.p / 100))} kg)</Text></Text>
                      <Text className="font-label-caps text-secondary mt-1">{item.focus}</Text>
                    </View>
                    <Text className="font-h3 text-primary-fixed">{item.reps} Tekrar</Text>
                 </View>
               ))}
            </View>
         )}
      </ScrollView>
    </SafeAreaView>
  );
}
