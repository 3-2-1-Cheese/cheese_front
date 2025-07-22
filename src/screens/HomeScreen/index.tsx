import { ScrollView, View } from 'react-native'
import MainBanner from './components/MainBanner'
import MainSearchBar from './components/MainSearchBar'
import MainLocation from './components/MainLocation'
import MainRecommend from './components/MainRecommend'
import useDarkmode from '@/hooks/useDarkmode'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '@/navigations/RootNavigator'
type RootStackRouteProps = RouteProp<RootStackParamList, '메인'>

export default function HomeScreen(): React.JSX.Element {
  const isDarkMode = useDarkmode()
  const route = useRoute<RootStackRouteProps>()

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDarkMode ? '#2D2D2D' : '#FBFBFB' }}>
      <MainBanner />
      <View style={{ paddingHorizontal: 12 }}>
        <MainSearchBar />
      </View>
      <MainLocation />
      <MainRecommend />
    </ScrollView>
  )
}
