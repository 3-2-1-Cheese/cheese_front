import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from './BottomTabNavigator'
import MyPageScreen from '@/screens/MyPageScreen'
import DetailScreen from '@/screens/DetailScreen'

const ROOT_STACK_CONSTANTS = {
  MainScreen: '메인',
  DetailPage: '상세',
  MyPage: '마이페이지',
} as const

export type RootStackParamList = {
  [ROOT_STACK_CONSTANTS.MainScreen]: undefined
  [ROOT_STACK_CONSTANTS.DetailPage]: { id: string } | undefined // 파라미터 추가d
  [ROOT_STACK_CONSTANTS.MyPage]: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROOT_STACK_CONSTANTS.MainScreen}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        // options={{ headerShown: true }}
        name={ROOT_STACK_CONSTANTS.DetailPage}
        component={DetailScreen}
      />
      <Stack.Screen
        // options={{ headerShown: true }}
        name={ROOT_STACK_CONSTANTS.MyPage}
        component={MyPageScreen}
      />
    </Stack.Navigator>
  )
}
