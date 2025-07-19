import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserType } from '@/types/auth'

interface AuthState {
  accessToken: string | null
  user: UserType | null
  setAuth: (token: string, user: UserType) => void
  clearAuth: () => void
}

const zustandAsyncStorage = {
  getItem: async (name: string) => {
    const item = await AsyncStorage.getItem(name)
    return item ? JSON.parse(item) : null
  },
  setItem: async (name: string, value: any) => {
    await AsyncStorage.setItem(name, JSON.stringify(value))
  },
  removeItem: async (name: string) => {
    await AsyncStorage.removeItem(name)
  },
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      user: null,
      setAuth: (token, user) => set({ accessToken: token, user }),
      clearAuth: () => set({ accessToken: null, user: null }),
    }),
    {
      name: 'auth-store',
      storage: zustandAsyncStorage,
    },
  ),
)
