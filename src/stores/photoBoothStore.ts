import { create } from 'zustand'
import { PhotoBoothType } from '@/types/photoBooth'

interface PhotoBoothState {
  photoBooths: PhotoBoothType[]
  setPhotoBooths: (data: PhotoBoothType[]) => void
  toggleFavorite: (id: string) => void
  clearPhotoBooths: () => void
}

export const usePhotoBoothStore = create<PhotoBoothState>(set => ({
  photoBooths: [],

  setPhotoBooths: data => set({ photoBooths: data }),

  toggleFavorite: id =>
    set(state => ({
      photoBooths: state.photoBooths.map(booth =>
        booth.id === id ? { ...booth, isFavorite: !booth.isFavorite } : booth,
      ),
    })),

  clearPhotoBooths: () => set({ photoBooths: [] }),
}))
