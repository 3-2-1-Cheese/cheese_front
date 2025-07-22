import GoogleMapsScreen from '@/components/maps/HomeBannerMap'
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import CheeseHeader from '@/components/layout/Header'
import CheeseBanner from './components/SearchBanner'
import { useCallback, useState } from 'react'
import SearchBottomSheet from './components/SearchBottomSheet'
import { regionType } from '@/constants/location'
import { BottomTabParamList } from '@/navigations/BottomTabNavigator'

type SearchScreenRouteProp = RouteProp<BottomTabParamList, '탐색'>

export default function SearchScreen(): React.JSX.Element {
  const route = useRoute<SearchScreenRouteProp>()
  const region = route.params?.region || '잠실'
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0)
  const [activatedPlace, setActivatedPlace] = useState(region)
  useFocusEffect(
    useCallback(() => {
      setActivatedPlace(region) // 선택된 장소 등록
      return () => {}
    }, [region]),
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
