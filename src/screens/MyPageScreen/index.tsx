import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native'
import { useAuthStore } from '@/stores/authStore'
import { colors } from '@/constants/colors'
import useDarkmode from '@/hooks/useDarkmode'
import CheeseHeader from '@/components/layout/Header'

export default function MyPageScreen(): React.JSX.Element {
  const user = useAuthStore(s => s.user)
  const isDark = useDarkmode()
  const color = colors(isDark)

  return (
    <>
      <SafeAreaView
        style={[styles.container, { backgroundColor: color.background }]}>
        <CheeseHeader />
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.profileContainer}>
            <View style={styles.avatarPlaceholder}>
              <Image
                source={{
                  uri: user?.profileImageUrl || '',
                }}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.userName}>{user?.nickname}</Text>

            <Text style={{ color: 'white' }}>
              {user?.profileImageUrl || 'asd'}
            </Text>
            <Text style={styles.userEmail}>{user?.id}</Text>
          </View>

          <View style={styles.listSection}>
            <TouchableOpacity style={styles.listItem}>
              <View>
                <Text style={styles.listTitle}>나의 관심 네컷사진관</Text>
                <Text style={styles.listSub}>Lorem ipsum dolor sit amet,</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View>
                <Text style={styles.listTitle}>최근 방문한 네컷사진관</Text>
                <Text style={styles.listSub}>Lorem ipsum dolor sit amet,</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </View>

          {/* 하단 추천 버튼 */}
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>
              나의 맞춤 네컷사진관 추천 리스트 바로가기
            </Text>
            <Text style={styles.bottomButtonSubtext}>
              Lorem Ipsum Dolor Sit Amet,
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 60,
  },
  profileContainer: {
    alignItems: 'center',
    paddingTop: 52,
    marginBottom: 32,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF8500',
    overflow: 'hidden',
    marginBottom: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  userEmail: {
    fontSize: 13,
    color: '#ccc',
    marginTop: 4,
  },
  listSection: {
    gap: 16,
    marginBottom: 40,
  },
  listItem: {
    backgroundColor: '#4A4A4A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  listSub: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 4,
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
  },
  bottomButton: {
    backgroundColor: '#FF8500',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
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
