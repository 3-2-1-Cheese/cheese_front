import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomTabNavigator from './navigations/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { userStore } from './stores'
import AuthScreen from './screens/AuthScreen'

function App(): React.JSX.Element {
  const userId = userStore(state => state.userId)
  // useEffect(() => {
  //   // 여기서 사용자 ID를 MMKV에서 불러오는 로직을 추가할 수 있습니다.
  //   // 예: const storedUserId = mmkv.getString('userId');
  //   // userStore.setState({ userId: storedUserId || '' });
  // }, [userId])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {userId ? <BottomTabNavigator /> : <AuthScreen />}
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
