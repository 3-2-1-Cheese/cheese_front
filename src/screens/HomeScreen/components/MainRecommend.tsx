import { colors } from '@/constants/colors'
import { MY_LOCATION } from '@/constants/location'
import { usePhotoBooth } from '@/hooks/query/usePhotoBooths'
import useAnimation from '@/hooks/useAnimation'
import useDarkmode from '@/hooks/useDarkmode'
import { RootStackParamList } from '@/navigations/RootNavigator'
import { getCurrentPosition } from '@/utils/location'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native'
import Animated from 'react-native-reanimated'

const filterData = ['인기', '맛집', '가까운']

const studioData = [
  {
    id: '1',
    name: '인생네컷 롯데월드 어드벤처',
    distance: '300m',
    tags: ['디즈니', '웨어러스', '최고심'],
  },
  {
    id: '2',
    name: '인생네컷 송리단길점',
    distance: '800m',
    tags: ['디즈니', '웨어러스', '최고심'],
  },
  {
    id: '3',
    name: '인생네컷 송리단길점',
    distance: '800m',
    tags: ['디즈니', '웨어러스', '최고심'],
  },
  {
    id: '4',
    name: '인생네컷 송리단길점',
    distance: '800m',
    tags: ['디즈니', '웨어러스', '최고심'],
  },
  {
    id: '5',
    name: '인생네컷 송리단길점',
    distance: '800m',
    tags: ['디즈니', '웨어러스', '최고심'],
  },
  {
    id: '6',
    name: '인생네컷 송리단길점',
    distance: '800m',
    tags: ['디즈니', '웨어러스', '최고심'],
  },
]
type NavigationProp = NativeStackNavigationProp<RootStackParamList>

export default function MainRecommend(): React.JSX.Element {
  const [selectedFilter, setSelectedFilter] = useState('인기')
  const isDarkMode = useDarkmode()
  const styles = customStyles(isDarkMode)

  const { handleGetPhotoBooth, isGetPhotoBoothLoading } = usePhotoBooth()
  const handleChangeFilter = async (tag: string) => {
    setSelectedFilter(tag)

    try {
      const { lat, lon } = await getCurrentPosition()
      handleGetPhotoBooth({ tag, lat, lon })
    } catch (err) {
      console.warn('위치 실패로 필터 요청 건너뜀')
      handleGetPhotoBooth({ tag, lat: MY_LOCATION.lat, lon: MY_LOCATION.lon })
    }
  }

  const navigation = useNavigation<NavigationProp>()

  useEffect(() => {
    handleChangeFilter('가까운')
  }, [])

  const renderFilterButton = (filter: string) => (
    <TouchableOpacity
      key={filter}
      style={[
        styles.filterButton,
        selectedFilter === filter && styles.activeFilterButton,
      ]}
      onPress={() => handleChangeFilter(filter)}>
      <Text
        style={[
          styles.filterButtonText,
          selectedFilter === filter && styles.activeFilterButtonText,
        ]}>
        {filter}
      </Text>
    </TouchableOpacity>
  )

  const renderStudioItem = ({ item }: { item: (typeof studioData)[0] }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('상세', { id: item.id })
      }}
      style={styles.studioItem}
      key={item.id}>
      <View style={styles.studioHeader}>
        <Text style={styles.studioName}>{item.name}</Text>
        <Text style={styles.studioDistance}>{item.distance}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {item.tags.map((tag, index) => (
          <View
            key={index}
            style={[
              styles.tag,
              index === 0 && styles.activeTag, // 첫 번째 태그를 활성화
            ]}>
            <Text style={[styles.tagText, index === 0 && styles.activeTagText]}>
              {tag}
            </Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  )
  const { animatedStyle } = useAnimation()
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.filterContainer, animatedStyle]}>
        <View style={styles.filterTitleContainer}>
          <Text style={styles.filterTitle}>테마별</Text>
          <Text style={styles.filterSubTitle}>로 둘러보기</Text>
        </View>
        {filterData.map(renderFilterButton)}
      </Animated.View>
      <Animated.View style={[styles.listContainer, animatedStyle]}>
        {/* <FlatList
          data={studioData}
          renderItem={renderStudioItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        /> */}
        <View style={styles.listContainer}>
          {studioData.map(v => {
            return renderStudioItem({ item: v })
          })}
        </View>
      </Animated.View>
    </View>
  )
}

function customStyles(isDarkMode: boolean) {
  const color = colors(isDarkMode)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    filterContainer: {
      flexDirection: 'row',
      marginTop: 24,
      marginVertical: 20,
      gap: 8,
    },
    filterTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    filterTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: color.text.primary,
    },
    filterSubTitle: {
      fontSize: 20,
      color: color.text.primary,
    },
    filterButton: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: color.tertiary,
    },
    activeFilterButton: {
      backgroundColor: color.active, // 오렌지 색상
    },
    filterButtonText: {
      fontSize: 14,
      fontWeight: '500',
      color: color.text.primary,
    },
    activeFilterButtonText: {
      color: '#FFFFFF',
    },
    listContainer: {
      paddingBottom: 20,
    },
    studioItem: {
      backgroundColor: '#404040',
      borderRadius: 20,
      padding: 16,
      marginBottom: 12,
      // shadowColor: 'rgba(200, 200, 200, 0.1)',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 1,
      // shadowRadius: 20,
      elevation: 8,
    },
    studioHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    studioName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: color.text.primary,
      flex: 1,
    },
    studioDistance: {
      fontSize: 16,
      fontWeight: 'bold',
      color: color.active,
    },
    tagsContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    tag: {
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 15,
      backgroundColor: color.tertiary,
    },
    activeTag: {
      backgroundColor: color.active,
    },
    tagText: {
      fontSize: 12,
      color: color.text.primary,
      fontWeight: '500',
    },
    activeTagText: {
      color: color.text.secondary,
    },
  })

  return styles
}
