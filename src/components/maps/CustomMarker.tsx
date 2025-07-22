import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Marker } from 'react-native-maps'
import FocusedMarker from '@/assets/icons/FocusedMarker.svg'
const CustomMarker = ({
  coordinate,
  isFocused,
}: {
  coordinate: { latitude: number; longitude: number }
  isFocused: boolean
}) => {
  return (
    <Marker coordinate={coordinate}>
      {isFocused && (
        <View>
          <FocusedMarker />
        </View>
      )}
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
    </Marker>
  )
}

const styles = StyleSheet.create({
  outerCircle: {
    width: 16,
    height: 16,
    zIndex: 99,
    borderRadius: 10,
    backgroundColor: '#ff954a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 6,
    zIndex: 99,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#BC5656', // 중앙 원 (또는 'transparent'로 비우기)
  },
})

export default CustomMarker
