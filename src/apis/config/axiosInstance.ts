import { useAuthStore } from '@/stores/authStore'
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
    const token = useAuthStore.getState().accessToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default axiosInstance
