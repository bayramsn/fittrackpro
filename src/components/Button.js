import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Button({ onPress, title = "Devam Et", icon = "arrow-forward" }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="w-full py-4 bg-primary-fixed rounded-full flex-row items-center justify-center shadow-lg"
      style={{
        shadowColor: "rgba(202,243,0,0.3)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 10,
      }}
    >
      <Text className="text-on-primary font-h3 text-h3 mr-2">{title}</Text>
      {icon && <MaterialIcons name={icon} size={24} color="#171e00" />}
    </TouchableOpacity>
  );
}
