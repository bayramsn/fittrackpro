import React from 'react';
import { View } from 'react-native';

export default function ProgressBar({ progress = 0 }) {
  // progress between 0 and 100
  return (
    <View className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden mb-lg mt-sm">
      <View
        className="h-full bg-primary-fixed rounded-full"
        style={{ width: `${progress}%` }}
      />
    </View>
  );
}
