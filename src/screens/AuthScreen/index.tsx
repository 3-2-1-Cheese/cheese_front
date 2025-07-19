import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import useDarkmode from '@/hooks/useDarkmode'
import CheeseHeader from '@/components/layout/Header'
import CHEESE_ACCOUNT from '@/assets/icons/CHEESE_ACCOUNT.svg'
import CHEESE_KAKAO_ICON from '@/assets/icons/CHEESE_KAKAO_ICON.svg'
import { login } from '@react-native-kakao/user'
import { loginApi } from '@/apis'
import { storage } from '@/utils/storage'
import { useLogin } from '@/hooks/query/useAuth'

export default function AuthScreen(): React.JSX.Element {
  const isDarkMode = useDarkmode()

  const bgColor = isDarkMode ? '#2D2D2D' : '#FBFBFB'

  const { handleLogin } = useLogin()
  const handleKakaoLogin = async () => {
    const res = (await login()) as any
    handleLogin({ accessToken: res.accessToken })
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <CheeseHeader />

      <View style={styles.content}>
        <CHEESE_ACCOUNT />
        <Text style={styles.title}>로그인하여 시작하기</Text>
        <Text style={styles.subtitle}>로그인하고 맞춤 추천을 받으세요</Text>
        <View style={styles.loginOptions}>
          <LoginButton
            label="카카오로 간편 회원가입하기"
            subtext="Lorem ipsum dolor sit amet,"
            onPress={handleKakaoLogin}
          />
          {/* <LoginButton
            label="이메일로 회원가입하기"
            subtext="Lorem ipsum dolor sit amet,"
            onPress={() => setUserId('email-user')}
          /> */}
        </View>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>
            아직 내게 맞는 네컷사진관을 못 찾으셨나요?
          </Text>
          <Text style={styles.bottomButtonSubtext}>
            탭하여 네컷사진 취향 테스트 먼저 시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function LoginButton({
  label,
  subtext,
  onPress,
}: {
  label: string
  subtext: string
  onPress: () => void
}) {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <CHEESE_KAKAO_ICON />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.loginLabel}>{label}</Text>
        <Text style={styles.loginSubtext}>{subtext}</Text>
      </View>
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 140,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF8500',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 13,
    color: '#ccc',
    marginTop: 4,
    marginBottom: 32,
  },
  loginOptions: {
    width: '100%',
    gap: 12,
    marginBottom: 40,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A4A4A',
    borderRadius: 16,
    padding: 16,
  },
  iconPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFD400',
    marginRight: 12,
  },
  loginLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  loginSubtext: {
    fontSize: 12,
    color: '#ccc',
  },
  arrow: {
    fontSize: 18,
    color: '#ccc',
  },
  bottomButton: {
    backgroundColor: '#FF8500',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
  },
  bottomButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
  bottomButtonSubtext: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
})
