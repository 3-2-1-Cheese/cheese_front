import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import CheeseHeader from '@/components/layout/Header'

import { SearchStackParamsList } from '@/navigations/SearchStackNavigator'

type SearchScreenRouteProp = RouteProp<SearchStackParamsList, '상세'>

export default function DetailScreen(): React.JSX.Element {
  const route = useRoute<SearchScreenRouteProp>()
  const id = route.params?.id || 'null' // 기본값 설정

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: 'absolute',
            inset: 0,
          }}>
          <Text>hello {id}</Text>
        </View>
        <CheeseHeader />
      </View>
    </View>
  )
}
