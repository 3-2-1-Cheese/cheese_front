import HomeScreen from '@/screens/HomeScreen'
import PhotoBookScreen from '@/screens/PhotoBookScreen'
import PhotoScreen from '@/screens/PhotoScreen'
import RecommendScreen from '@/screens/RecommendScreen'
import SearchScreen from '@/screens/SearchScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeIcon from '@/assets/icons/CHEESE_HOME.svg'
import SearchIcon from '@/assets/icons/CHEESE_CATALOG.svg'
import PhotoIcon from '@/assets/icons/CHEESE_PHOTO.svg'
import RecommendIcon from '@/assets/icons/CHEESE_LIKE.svg'
import PhotoBookIcon from '@/assets/icons/CHEESE_UNION.svg'
import { colors } from '@/constants/colors'
import { TouchableOpacity, View } from 'react-native'
import useDarkmode from '@/hooks/useDarkmode'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from '@/screens/DetailScreen'

const SEARCH_STACK_CONSTANTS = {
  SearchScreen: '탐색',
  DetailScreen: '상세',
} as const

export type SearchStackParamsList = {
  [SEARCH_STACK_CONSTANTS.SearchScreen]: { region: string } | undefined // 파라미터 추가
  [SEARCH_STACK_CONSTANTS.DetailScreen]: { id: string } | undefined
  // [BOTTOM_TAB_CONSTANTS.AuthScreen]: undefined
}

const Stack = createStackNavigator<SearchStackParamsList>()

export default function SearchStackNavigator({ route }: { route: any }) {
  const isDarkMode = useDarkmode()
  const region = route?.params?.region ?? '잠실'

  const color = colors(isDarkMode)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SEARCH_STACK_CONSTANTS.SearchScreen}
        options={{ headerShown: false }}
        initialParams={region}
        component={SearchScreen}
      />
      <Stack.Screen
        name={SEARCH_STACK_CONSTANTS.DetailScreen}
        component={DetailScreen}
      />
    </Stack.Navigator>
  )
}
