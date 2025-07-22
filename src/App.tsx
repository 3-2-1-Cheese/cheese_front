import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomTabNavigator from './navigations/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import AuthScreen from './screens/AuthScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import { initializeKakaoSDK } from '@react-native-kakao/core'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './apis/config/queryClient'
import { useAuthStore } from './stores/authStore'
import RootNavigator from './navigations/RootNavigator'
function App(): React.JSX.Element {
  const accessToken = useAuthStore(s => s.accessToken)
  // const clearAuth = useAuthStore(s=>s.clearAuth)
  useEffect(() => {
    initializeKakaoSDK('ac61b1ef5b9ef9abe387388939c1cf92')
    setTimeout(() => {
      SplashScreen.hide()
    }, 500)
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaProvider>
            {accessToken ? <RootNavigator /> : <AuthScreen />}
          </SafeAreaProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default App
