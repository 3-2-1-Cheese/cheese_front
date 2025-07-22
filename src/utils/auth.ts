import { useAuthStore } from '@/stores/authStore'
import { storage } from './mmkv'

export function logout() {
  useAuthStore.getState().clearAuth()

  storage.delete('access-token')
  storage.delete('user')
}
