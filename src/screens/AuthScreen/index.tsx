import { Button, ScrollView, View } from 'react-native'
import useDarkmode from '@/hooks/useDarkmode'
import { userStore } from '@/stores'
export default function AuthScreen(): React.JSX.Element {
  const isDarkMode = useDarkmode()
  const setUserId = userStore(state => state.setUserId)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? '#2D2D2D' : '#FBFBFB',
      }}>
      <Button title="로그인" onPress={() => setUserId('temp-userId')} />
    </View>
  )
}
