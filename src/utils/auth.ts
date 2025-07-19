import { useAuthStore } from '@/stores/authStore'
import { storage } from '@/utils/storage'

export function logout() {
  // ✅ zustand 상태 초기화
  useAuthStore.getState().clearAuth()

  // ✅ MMKV 초기화 (굳이 없어도 되지만 double check)
  storage.delete('access-token')
  storage.delete('user')
}
