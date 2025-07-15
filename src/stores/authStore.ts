import { create } from 'zustand'

interface userStoreProps {
  userId: string
  setUserId: (userId: string) => void
}

export const userStore = create<userStoreProps>((set, get) => {
  return {
    userId: '',
    setUserId: (id: string) => set({ userId: id }),
  }
})
