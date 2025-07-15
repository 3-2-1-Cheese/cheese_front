import { regionType, INITIAL_LOCATION } from '@/constants/location'
import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Region, Marker } from 'react-native-maps'
import CustomMarker from './CustomMarker'
import { customMapStyle } from '@/constants/mapStyle'
import LinearGradient from 'react-native-linear-gradient'
const markers = [
  {
    id: '잠실-0',
    region: '잠실',
    coordinate: { latitude: 37.515245, longitude: 127.091011 },
  },
  {
    id: '잠실-1',
    region: '잠실',
    coordinate: { latitude: 37.510414, longitude: 127.093626 },
  },
  {
    id: '잠실-2',
    region: '잠실',
    coordinate: { latitude: 37.5125, longitude: 127.091886 },
  },
  {
    id: '잠실-3',
    region: '잠실',
    coordinate: { latitude: 37.513239, longitude: 127.094852 },
  },
  {
    id: '잠실-4',
    region: '잠실',
    coordinate: { latitude: 37.515105, longitude: 127.091305 },
  },

  {
    id: '강남-0',
    region: '강남',
    coordinate: { latitude: 37.520337, longitude: 127.047273 },
  },
  {
    id: '강남-1',
    region: '강남',
    coordinate: { latitude: 37.515142, longitude: 127.045112 },
  },
  {
    id: '강남-2',
    region: '강남',
    coordinate: { latitude: 37.519215, longitude: 127.048911 },
  },
  {
    id: '강남-3',
    region: '강남',
    coordinate: { latitude: 37.516948, longitude: 127.048158 },
  },
  {
    id: '강남-4',
    region: '강남',
    coordinate: { latitude: 37.520981, longitude: 127.049125 },
  },

  {
    id: '성수-0',
    region: '성수',
    coordinate: { latitude: 37.548672, longitude: 127.044789 },
  },
  {
    id: '성수-1',
    region: '성수',
    coordinate: { latitude: 37.544885, longitude: 127.048456 },
  },
  {
    id: '성수-2',
    region: '성수',
    coordinate: { latitude: 37.547552, longitude: 127.04398 },
  },
  {
    id: '성수-3',
    region: '성수',
    coordinate: { latitude: 37.546371, longitude: 127.046658 },
  },
  {
    id: '성수-4',
    region: '성수',
    coordinate: { latitude: 37.548015, longitude: 127.044186 },
  },

  {
    id: '홍대-0',
    region: '홍대',
    coordinate: { latitude: 37.556246, longitude: 126.921985 },
  },
  {
    id: '홍대-1',
    region: '홍대',
    coordinate: { latitude: 37.553441, longitude: 126.919883 },
  },
  {
    id: '홍대-2',
    region: '홍대',
    coordinate: { latitude: 37.556521, longitude: 126.92235 },
  },
  {
    id: '홍대-3',
    region: '홍대',
    coordinate: { latitude: 37.554754, longitude: 126.923118 },
  },
  {
    id: '홍대-4',
    region: '홍대',
    coordinate: { latitude: 37.556732, longitude: 126.921308 },
  },
]

const GoogleMapsScreen = ({
  activatedPlace,
}: {
  activatedPlace: regionType
}) => {
  const [region, setRegion] = useState<Region>({
    latitude: INITIAL_LOCATION.regions[activatedPlace].lat,
    longitude: INITIAL_LOCATION.regions[activatedPlace].lon,
    latitudeDelta: 0.06,
    longitudeDelta: 0.06,
  })

  const mapRef = useRef<MapView>(null)
  useEffect(() => {
    const location = INITIAL_LOCATION.regions[activatedPlace]
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.lat,
          longitude: location.lon,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        },
        500,
      )
    }
  }, [activatedPlace])

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent
    const newMarker: any = {
      id: Date.now().toString(),
      coordinate,
      title: '새 마커',
      description: `위도: ${coordinate.latitude.toFixed(
        6,
      )}, 경도: ${coordinate.longitude.toFixed(6)}`,
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        onPress={handleMapPress}
        showsUserLocation={true}
        showsMyLocationButton={true}
        mapType="standard"
        customMapStyle={customMapStyle}>
        {markers
          .filter(marker => marker.region === activatedPlace)
          .map(marker => (
            <CustomMarker key={marker.id} coordinate={marker.coordinate} />
          ))}
      </MapView>
      <LinearGradient
        colors={['rgba(45, 45, 45, 0.95)', 'rgba(0, 0, 0, 0)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.4 }}
        style={{ position: 'absolute', inset: 0 }}></LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default GoogleMapsScreen
