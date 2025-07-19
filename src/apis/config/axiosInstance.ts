import { getAccessToken, storage } from '@/utils/storage'
import { logout } from '@react-native-kakao/user'
import axios from 'axios'

const baseUrl = process.env.BASE_URL || 'http://localhost:8080/api/'
const version = process.env.VERSION || 'v1'
const axiosInstance = axios.create({
  baseURL: baseUrl + version,
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosInstance.interceptors.request.use(
  async config => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 403) {
      console.warn('403 응답 → 토큰 삭제 및 로그아웃 실행')

      storage.delete('access-token')
      storage.delete('user')
    }

    return Promise.reject(error)
  },
)
export default axiosInstance
