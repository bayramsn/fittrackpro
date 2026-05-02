import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const ITEM_HEIGHT = 60; // Approximate height of each item

export default function VerticalSlider({ min, max, initialValue, onValueChange, label }) {
  const [data, setData] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    const arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    setData(arr);
  }, [min, max]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);

    if (data[index] !== undefined) {
      onValueChange(data[index]);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ height: ITEM_HEIGHT, justifyContent: 'center', alignItems: 'center' }}>
         <Text className="font-h2 text-3xl text-surface-variant opacity-60">{item}</Text>
      </View>
    );
  };

  return (
    <View style={{ height: ITEM_HEIGHT * 5, width: '100%', alignItems: 'center', justifyContent: 'center' }}>

      {/* Selection Highlight */}
      <View style={{ position: 'absolute', top: ITEM_HEIGHT * 2, height: ITEM_HEIGHT, width: '100%', borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'rgba(202,243,0,0.4)', zIndex: -1 }} />

      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={{ paddingVertical: ITEM_HEIGHT * 2 }}
        initialScrollIndex={Math.max(0, initialValue - min)}
        getItemLayout={(data, index) => (
          {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
        )}
      />
    </View>
  );
}
