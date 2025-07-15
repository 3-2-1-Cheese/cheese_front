import GoogleMapsScreen from '@/components/maps/HomeBannerMap'
import { BottomTabParamList } from '@/navigations/BottomTabNavigator'
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import CheeseHeader from '@/components/layout/Header'
import CheeseBanner from './components/SearchBanner'
import LinearGradient from 'react-native-linear-gradient'
import { useCallback, useState } from 'react'
import SearchBottomSheet from './components/SearchBottomSheet'
import { regionType } from '@/constants/location'

type SearchScreenRouteProp = RouteProp<BottomTabParamList, '탐색'>

export default function SearchScreen(): React.JSX.Element {
  const route = useRoute<SearchScreenRouteProp>()
  const title = route.params?.title || '잠실' // 기본값 설정
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0)
  const [activatedPlace, setActivatedPlace] = useState(title)
  useFocusEffect(
    useCallback(() => {
      setActivatedPlace(title) // 선택된 장소 등록
      return () => {}
    }, [title]),
  )

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: 'absolute',
            inset: 0,
          }}>
          <GoogleMapsScreen activatedPlace={activatedPlace as regionType} />
        </View>
        <CheeseHeader />
        <CheeseBanner
          activatedPlace={activatedPlace}
          setActivatedPlace={setActivatedPlace}
          isBottomSheetUp={bottomSheetIndex === 1}
        />
      </View>
      <View style={{ position: 'absolute', inset: 0 }}>
        <SearchBottomSheet
          bottomSheetIndex={bottomSheetIndex}
          onChange={setBottomSheetIndex}
        />
      </View>
    </View>
  )
}
