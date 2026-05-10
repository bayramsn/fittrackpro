import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PlanGeneratingScreen({ navigation }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Profilin analiz ediliyor...');

  const steps = [
    { threshold: 20, text: 'Vücut tipin belirleniyor...' },
    { threshold: 45, text: 'Hedeflerine uygun antrenmanlar seçiliyor...' },
    { threshold: 70, text: 'Beslenme planın optimize ediliyor...' },
    { threshold: 90, text: 'AI Koçun hazırlanıyor...' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigation.navigate('ProgramRecommendationScreen');
          }, 1000);
          return 100;
        }

        const nextProgress = prev + 1;
        const currentStep = steps.find(s => nextProgress < s.threshold);
        if (currentStep) {
          setStatus(currentStep.text);
        } else if (nextProgress >= 90) {
           setStatus('Planın tamamlanıyor...');
        }

        return nextProgress;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background justify-center items-center px-margin">
      <View className="w-24 h-24 mb-8">
        <ActivityIndicator size="large" color="#caf300" />
      </View>

      <Text className="font-h1 text-2xl text-primary text-center mb-4">Planın Hazırlanıyor</Text>
      <Text className="font-body-lg text-secondary text-center mb-12 h-12">{status}</Text>

      <View className="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-4">
        <View
          className="h-full bg-primary-container"
          style={{ width: `${progress}%` }}
        />
      </View>
      <Text className="font-label-caps text-primary-container">%{progress}</Text>

      <LinearGradient
        colors={['transparent', 'rgba(202,243,0,0.05)', 'transparent']}
        className="absolute inset-0 pointer-events-none"
      />
    </SafeAreaView>
  );
}
