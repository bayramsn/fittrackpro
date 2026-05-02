import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 12; // Distance between tick marks
const CENTER_OFFSET = width / 2;

export default function HorizontalRulerSlider({ min, max, initialValue, onValueChange, step = 1, unit = "" }) {
  const [data, setData] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    const arr = [];
    // Generate array representing each tick mark.
    // Major ticks every 5 units, minor ticks in between
    for (let i = min; i <= max; i += step) {
      arr.push({
        value: i,
        isMajor: i % 5 === 0
      });
    }
    setData(arr);
  }, [min, max, step]);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);

    if (data[index] !== undefined) {
      onValueChange(data[index].value);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: ITEM_WIDTH, alignItems: 'center', justifyContent: 'flex-end', height: 80, paddingBottom: 10 }}>
        {item.isMajor ? (
          <>
            <View style={{ width: 2, height: 40, backgroundColor: '#8f9378', borderRadius: 2 }} />
            <Text style={{ position: 'absolute', bottom: -15, color: '#e5e2e1', fontSize: 10, fontFamily: 'Inter-Bold', width: 30, textAlign: 'center' }}>
              {item.value}
            </Text>
          </>
        ) : (
          <View style={{ width: 2, height: 20, backgroundColor: '#444932', borderRadius: 2 }} />
        )}
      </View>
    );
  };

  return (
    <View style={{ width: '100%', height: 120, position: 'relative', justifyContent: 'center' }}>

      {/* Center Indicator */}
      <View style={{ position: 'absolute', left: '50%', top: 10, bottom: 20, width: 4, backgroundColor: '#caf300', zIndex: 10, marginLeft: -2, borderRadius: 4, shadowColor: '#caf300', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.8, shadowRadius: 10 }} />

      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        keyExtractor={(item) => item.value.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={{ paddingHorizontal: CENTER_OFFSET }}
        initialScrollIndex={Math.max(0, (initialValue - min) / step)}
        getItemLayout={(data, index) => (
          {length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index}
        )}
      />

      {/* Fading Edges */}
      <LinearGradient colors={['#121212', 'transparent']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 60, pointerEvents: 'none' }} />
      <LinearGradient colors={['transparent', '#121212']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 60, pointerEvents: 'none' }} />

    </View>
  );
}
