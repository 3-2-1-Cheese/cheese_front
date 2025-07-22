import { colors } from '@/constants/colors'
import useDarkmode from '@/hooks/useDarkmode'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import CheeseLogo from '@/assets/icons/CHEESE_LOGO.svg'
import CheeseUser from '@/assets/icons/CHEESE_USER.svg'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigations/RootNavigator'

export default function CheeseHeader() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const safeAreaInsets = useSafeAreaInsets()
  const isDarkMode = useDarkmode()

  const styles = customStyles(safeAreaInsets, isDarkMode)
  const color = colors(isDarkMode)

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('메인')}>
        <CheeseLogo color={color.active} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('마이페이지')}>
        <CheeseUser color={color.text.primary} />
      </TouchableOpacity>
    </View>
  )
}

function customStyles(safeAreaInsets: EdgeInsets, isDarkMode: boolean) {
  return StyleSheet.create({
    header: {
      position: 'absolute',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: safeAreaInsets.top + 10,
      paddingBottom: 10,
      left: 0,
      zIndex: 9999,
      right: 0,
      paddingHorizontal: 28,
    },
  })
}
