import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TopAppBar from '../../components/TopAppBar';

export default function AlternativeExerciseScreen({ navigation }) {
  const alternatives = [
    { title: "Dumbbell Bench Press", focus: "Göğüs (Denge Odaklı)", type: "Serbest Ağırlık", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2LIq0IAujtSkRhnb-UZs4sGp1yOSuQroxVzhmcfxUvnOhP_X4EGDHT6Hgre7sLz2kFxzO_vDAU9Aic_18Fax-mfNXXDxkfUXtdWIC3W4kVXohnf-Yz2rHSWDsO1MqDpS6j-VxRhTCQQmmRavS_BoaWHTKRDA2J4Y9SooG6ThMa8UdHegIFmqRzJ-rc4kzZ1lD9uREXkNyG9PVN3ey04e13GnNKH5uqLLLiv-kghu_l8mw19MtDcl9l08vdfohZqigLdxm4NxJEYA" },
    { title: "Machine Chest Press", focus: "Göğüs (İzole)", type: "Makine", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6GU6Vir6ch0w-As8sAFU2cJqSDABJtst5iJNGgtzm4QlmpIqU3B7fARESE2b0p_DNWabE2oBRxGbP7g2yKBq6Tfg3-0tDnjrbysoLdaFUkxKPc7KSQH87xdTJIx66n7Zgb5Lgzd3sSyF4ixmv_eUr9Z0mVw5Pom3ma59f74K7JYAviEMdvpW_ACVtuRRrqhf1l3nXVwt-uiX5cmjDmWx05qAB0fIu10JNALS5ECeTOTb91T8aErUA8iNkU78m84FZuVcoHwsaL4k" },
    { title: "Push Up (Şınav)", focus: "Göğüs (Vücut Ağırlığı)", type: "Vücut Ağırlığı", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE6yU5FvccK__XFD4mRD9GrH02OhUhIN9io27tAzV2l7_kAquLpb8yeipBdjWCq8eUTaJj5nP_7gh8QJAlRzNHCuecu8EZWwqpAzCXdUZjiaT2FOrnpk9AlKbnuisppG2fKI5VKLBkVUUO8Aid9TVt9sZW_fBDkH0twdxjzI9e_tj_ySvBto7ga0AkA_DZcIOCvRe4MaBJQIcApVmNOW2dMhSsjUIqhMCE7a_FZcNgSl8mLVl_sw4XA1jh6WMqVduby21g4VbWTg8" }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopAppBar title="Alternatif Seç" showBack={true} />
      <ScrollView className="flex-1 px-margin pt-md">
        <Text className="font-body-md text-secondary mb-6">Bench Press yerine yapılabilecek, aynı kas grubunu hedefleyen hareketler.</Text>
        <View className="flex-col gap-4">
          {alternatives.map((item, idx) => (
            <TouchableOpacity key={idx} className="bg-surface-container rounded-xl p-3 border border-[#ffffff10] flex-row items-center" onPress={() => navigation.goBack()}>
               <Image source={{uri: item.img}} className="w-20 h-20 rounded-lg mr-4 opacity-80" />
               <View className="flex-1">
                 <Text className="font-h3 text-primary text-[18px] mb-1">{item.title}</Text>
                 <Text className="font-body-md text-secondary text-[12px]">{item.focus} • {item.type}</Text>
               </View>
               <MaterialIcons name="chevron-right" size={24} color="#656464" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
