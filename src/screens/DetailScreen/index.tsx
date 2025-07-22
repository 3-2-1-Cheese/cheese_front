import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '@/navigations/RootNavigator'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import BACK_ICON from '@/assets/icons/CHEESE_BACK_ICON.svg'
import LinearGradient from 'react-native-linear-gradient'
import Carousel from 'react-native-reanimated-carousel'
type DetailRouteProp = RouteProp<RootStackParamList, '상세'>

type NavigationProp = NativeStackNavigationProp<RootStackParamList>
const carouselImages = [
  require('@/assets/images/photobooth_example.png'),
  require('@/assets/images/photobooth_example2.png'),
  require('@/assets/images/photobooth_example.png'),
]
const { width } = Dimensions.get('window')

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>()
  const { id } = route.params || {}
  const navigation = useNavigation<NavigationProp>()
  const safeAreaInsets = useSafeAreaInsets()
  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Carousel
            loop
            width={width}
            height={width}
            autoPlay={false}
            data={carouselImages}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <Image source={item} style={styles.image} resizeMode="cover" />
            )}
          />
          <LinearGradient
            colors={['rgba(51, 51, 51, 0.95)', 'rgba(51, 51, 51, 0.10)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.0849, 0.855]}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              left: safeAreaInsets.left + 16,
              top: safeAreaInsets.top,
            }}>
            <BACK_ICON />
          </TouchableOpacity>
        </View>

        {/* 📍 상단 타이틀 */}
        <View style={styles.header}>
          <Text style={styles.title}>인생네컷</Text>
          <TouchableOpacity style={styles.label}>
            <Text style={styles.labelText}>롯데월드 어드벤처점</Text>
          </TouchableOpacity>
        </View>

        {/* 📘 소개글 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>사진관 소개</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* 🎠 테마 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>네컷 테마</Text>
          <View style={styles.themeContainer}>
            {['디즈니', '원어스', '최고심'].map((tag, idx) => (
              <View key={idx} style={styles.themeBadge}>
                <Text style={styles.themeText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    aspectRatio: 1 / 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    backgroundColor: '#FF8500',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  labelText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    backgroundColor: '#2E2E2E',
    padding: 14,
    borderRadius: 12,
  },
  themeContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  themeBadge: {
    backgroundColor: '#FF8500',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  themeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
